import t from 'tcomb';
import {
    MinMaxValueType,
    SingleNumberValueType
} from '../../../domain/common/BaseTypes';
import { BaseStateType } from '../../../domain/common/StateType';

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
        drawSegmentDataType = t.String;
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
        entryPoints: buildSegmentListFormType(fixListEnum, runwayListEnum),
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
    suffix: t.dict(t.String, t.String),
    rwy: SegmentListType,
    body: SementWaypointListType,
    draw: buildDrawListFormType(),
    entryPoints: t.maybe(SegmentListType),
    exitPoints: t.maybe(SegmentListType)
}, 'SidProcedureSingleType');

export const ProcedureListType = t.list(ProcedureSingleType, 'ProcedureListType');

export const ProcedureSingleStateType = BaseStateType.extend({
    payload: t.maybe(ProcedureSingleType)
}, 'ProcedureSingleStateType');

export const ProcedureListStateType = BaseStateType.extend({
    payload: t.maybe(ProcedureListType)
}, 'ProcedureSingleStateType');

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
