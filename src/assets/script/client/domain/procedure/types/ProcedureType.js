import t from 'tcomb';
import _filter from 'lodash/filter';
import _forEach from 'lodash/forEach';
import _map from 'lodash/map';
import {
    MinMaxValueType,
    SingleNumberValueType
} from '../../../domain/common/BaseTypes';
import { SpawnPatternCategoryEnum } from '../../spawnPattern/types/SpawnPatternType';
import { BaseStateType } from '../../../domain/common/StateType';

const CategoryToTypeEnum = t.enums({
    DEPARTURE: 'SID',
    ARRIVAL: 'STAR'
}, 'CategoryToTypeEnum');

const TypeToCategoryEnum = t.enums({
    SID: SpawnPatternCategoryEnum.meta.map.DEPARTURE,
    STAR: SpawnPatternCategoryEnum.meta.map.ARRIVAL
}, 'CategoryToTypeEnum');

export const RouteTypeEnum = t.enums.of([
    'SID',
    'STAR'
], 'RouteTypeEnum');

export const RestrictionQualifierEnum = t.enums({
    MAINTAIN: 'Maintain',
    GT: 'Greater Than',
    LT: 'Less Than',
    MIN_MAX: 'Min/Max'
}, 'RestrictionQualifierEnum');

export const BaseRouteWaypointType = t.struct({
    isHold: t.Boolean,
    isVector: t.Boolean
}, 'BaswRouteWaypointType');

export const BaseSegmentType = t.struct({
    type: RouteTypeEnum,
    icao: t.String,
    name: t.String
}, 'BaseSegmentType');

// Form types
export const BaseWaypointRestrictionType = t.struct({
    restrictionQualifier: t.maybe(RestrictionQualifierEnum)
}, 'BaseWaypointRestrictionType');

export const RouteWaypointRestrictionType = t.union([
    BaseWaypointRestrictionType,
    MinMaxValueType,
    SingleNumberValueType
], 'RouteWaypointRestrictionType');

RouteWaypointRestrictionType.dispatch = (value) => {
    if (!value || !value.restrictionQualifier) {
        return BaseWaypointRestrictionType;
    }

    if (value.restrictionQualifier === 'MIN_MAX') {
        return BaseWaypointRestrictionType.extend(MinMaxValueType);
    }

    return BaseWaypointRestrictionType.extend(SingleNumberValueType);
};

export const buildSegmentWaypointListFormType = (waypointListEnum) => {
    const RouteSegmentWaypointUpdateType = BaseRouteWaypointType.extend({
        waypointName: waypointListEnum,
        altitude: RouteWaypointRestrictionType,
        speed: RouteWaypointRestrictionType
    }, 'RouteSegmentWaypointUpdateType');

    return t.list(RouteSegmentWaypointUpdateType, 'RouteSegmentWaypointUpdateListType');
};

export const buildDrawListFormType = (fixListEnum = null) => {
    let drawSegmentDataType = fixListEnum;

    // used for state types
    if (!fixListEnum) {
        drawSegmentDataType = t.maybe(t.String);
    }

    const DrawListType = t.struct({
        drawSegment: t.list(drawSegmentDataType)
    }, 'DrawSegmentType');

    return t.list(DrawListType, 'SegmentDrawListType');
};

export const buildSegmentListFormType = (trimmedEntryListEnum, waypointListEnum) => {
    const RouteSegmentType = t.struct({
        name: trimmedEntryListEnum,
        waypoints: buildSegmentWaypointListFormType(waypointListEnum)
    }, 'RouteSegmentType');

    return t.list(RouteSegmentType, 'RouteSegmentListType');
};

export const buildInitialProcedureFormType = () => BaseSegmentType;

export const buildSidProcedureFormType =
    (formValues, runwayListEnum, fixListEnum, suffixType) => BaseSegmentType.extend({
        suffix: suffixType,
        rwy: buildSegmentListFormType(runwayListEnum, fixListEnum),
        body: buildSegmentWaypointListFormType(fixListEnum),
        exitPoints: buildSegmentListFormType(fixListEnum, fixListEnum),
        draw: buildDrawListFormType(fixListEnum)
    }, 'SidProcedureFormType');

export const buildStarProcedureFormType =
    (formValues, runwayListEnum, fixListEnum, suffixType) => BaseSegmentType.extend({
        suffix: suffixType,
        entryPoints: buildSegmentListFormType(fixListEnum, fixListEnum),
        body: buildSegmentWaypointListFormType(fixListEnum),
        rwy: buildSegmentListFormType(runwayListEnum, fixListEnum),
        draw: buildDrawListFormType(fixListEnum)
    }, 'StarProcedureFormType');

// State types
export const SegmentWaypointSingleType = t.struct({
    waypointName: t.String,
    altitude: t.maybe(RouteWaypointRestrictionType),
    speed: t.maybe(RouteWaypointRestrictionType)
}, 'WaypointSingleType');

export const SementWaypointListType = t.list(SegmentWaypointSingleType, 'SegmentWaypointListType');

export const SegmentSingleType = t.struct({
    name: t.String,
    waypoints: SementWaypointListType
}, 'SegmentSingleType');

export const SegmentListType = t.list(SegmentSingleType, 'SegmentListType');

export const ProcedureSingleType = BaseSegmentType.extend({
    suffix: t.maybe(t.dict(t.String, t.maybe(t.String))),
    rwy: SegmentListType,
    body: SementWaypointListType,
    draw: buildDrawListFormType(),
    entryPoints: t.maybe(SegmentListType),
    exitPoints: t.maybe(SegmentListType)
}, 'ProcedureSingleType');

export const RouteStringTranslationType = t.struct({
    category: t.String,
    icaoList: t.list(t.String),
    entryList: t.list(t.String),
    baseList: t.list(t.String),
    exitList: t.list(t.String)
}, 'RouteStringTranslationType');

RouteStringTranslationType.prototype.buildRouteStringForCategory = function buildRouteStringForCategory(
    routeIcao, airportIcao, segmentName
) {
    let routeStr = `${segmentName}.${routeIcao}.${airportIcao}`;

    if (this.category === SpawnPatternCategoryEnum.meta.map.DEPARTURE) {
        routeStr = `${airportIcao}.${routeIcao}.${segmentName}`;
    }

    return routeStr.toUpperCase();
};

// eslint-disable-next-line max-len
RouteStringTranslationType.prototype.buildRouteStringListForRoute = function buildRouteStringListForRoute(airportIcao) {
    const routeStringList = [];
    const segmentList = this.category === SpawnPatternCategoryEnum.meta.map.DEPARTURE
        ? this.exitList
        : this.entryList;

    for (let i = 0; i < this.icaoList.length; i++) {
        const icao = this.icaoList[i];

        for (let j = 0; j < segmentList.length; j++) {
            const segmentName = segmentList[j];
            const routeStr = this.buildRouteStringForCategory(icao, airportIcao, segmentName);

            routeStringList.push(routeStr);
        }
    }

    return routeStringList;
};

ProcedureSingleType.prototype.toRouteStringTranslationType = function toRouteStringTranslationType() {
    let entryList = [];
    let exitList = [];
    const category = TypeToCategoryEnum.meta.map[this.type];
    const icaoList = [this.icao];
    const baseList = _map(this.body, (body) => body.waypointName);

    if (this.type === RouteTypeEnum.meta.map.SID) {
        entryList = _map(this.rwy, (rwy) => rwy.name);
        exitList = _map(this.exitPoints, (exit) => exit.name);
    } else {
        entryList = _map(this.entryPoints, (entry) => entry.name);
        exitList = _map(this.rwy, (rwy) => rwy.name);
    }

    if (!t.Nil.is(this.suffix)) {
        _forEach(this.suffix, (value) => {
            icaoList.push(`${this.icao}${value}`);
        });
    }

    return new RouteStringTranslationType({
        category,
        icaoList,
        entryList,
        baseList,
        exitList
    });
};

export const ProcedureListType = t.list(ProcedureSingleType, 'ProcedureListType');

ProcedureListType.findProceduresByCategory = function(procedureList, category) {
    if (!CategoryToTypeEnum.is(category)) {
        // eslint-disable-next-line max-len
        throw new TypeError('Invalid category passed to .findProceduresByCategory(). Expected a CategoryToTypeEnum value.');
    }

    const procedureListForCategory = _filter(
        procedureList,
        (procedure) => procedure.type === CategoryToTypeEnum.meta.map[category]
    );

    return new ProcedureListType(procedureListForCategory);
};

ProcedureListType.buildRouteStringList = function buildRouteStringList(procedureList, airportIcao, category) {
    if (!ProcedureListType.is(procedureList) || airportIcao === '') {
        throw TypeError('Invalid data passed to .buildRouteStringList(). Expected a ProcedureListType');
    }

    const proceduresForCategory = ProcedureListType.findProceduresByCategory(procedureList, category);
    const routeStringList = [];

    for (let i = 0; i < proceduresForCategory.length; i++) {
        const procedure = proceduresForCategory[i];
        const translationType = procedure.toRouteStringTranslationType();

        routeStringList.push(
            ...translationType.buildRouteStringListForRoute(airportIcao)
        );
    }

    return routeStringList.sort();
};

export const ProcedureSingleStateType = BaseStateType.extend({
    payload: t.maybe(ProcedureSingleType)
}, 'ProcedureSingleStateType');

export const ProcedureListStateType = BaseStateType.extend({
    payload: t.maybe(ProcedureListType)
}, 'ProcedureSingleStateType');

/**
 * Create a new `ProcedureSingleType` instance from a current `BaseSegmentType`.
 *
 * `BaseSegmentType` is inherited by all of the dynamic procedure formTypes.
 * This instance method will thus be available by any one of those types,
 * and gives us a way to create a `ProcedureSingleType` that can be used
 * within the reducers.
 *
 * @for BaseSegmentType
 * @method toProcedureSingleType
 * @return {ProcedureSingleType}
 */
BaseSegmentType.prototype.toProcedureSingleType = function toProcedureSingleType() {
    const procedureSingle = new ProcedureSingleType(this);

    if (!procedureSingle) {
        // eslint-disable-next-line max-len
        throw new TypeError('Invalid data supplied to .toProcedureSingleType(). Expected a valid instance of `BaseSegmentType`');
    }

    return procedureSingle;
};

// PreviewTypes
export const RouteSegmentWaypointType = t.union([
    t.String,
    t.tuple([t.String, t.String])
], 'RouteSegmentWaypointType');

export const RouteSegmentWaypointListType = t.list(RouteSegmentWaypointType, 'RouteSegmentWaypointListType');

export const BaseProcedureRoutePreviewType = t.struct({
    icao: t.String,
    name: t.String,
    suffix: t.dict(t.String, t.String),
    body: RouteSegmentWaypointListType,
    rwy: t.dict(t.String, RouteSegmentWaypointListType),
    draw: t.list(t.list(t.String))
}, 'ProcedureRouteType');

export const SidProcedureRoutePreviewType = BaseProcedureRoutePreviewType.extend({
    exitPoints: t.dict(t.String, RouteSegmentWaypointListType)
}, 'StarProcedureRoutePreviewType');

export const SidProcedureRouteDict = t.dict(t.String, SidProcedureRoutePreviewType);

export const StarProcedureRoutePreviewType = BaseProcedureRoutePreviewType.extend({
    entryPoints: t.dict(t.String, RouteSegmentWaypointListType)
}, 'StarProcedureRoutePreviewType');

export const StarProcedureRouteDict = t.dict(t.String, StarProcedureRoutePreviewType);
