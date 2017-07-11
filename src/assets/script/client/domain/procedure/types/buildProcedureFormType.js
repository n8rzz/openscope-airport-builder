import t from 'tcomb';
import _get from 'lodash/get';
import { FixListType } from '../../fix/types/FixType';
import { RunwayPairListType } from '../../runway/types/RunwayType';

export const ProcedureRouteTypeEnum = t.enums.of([
    'SID',
    'STAR'
], 'ProcedureRouteTypeEnum');

const BaseSegmentUpdateType = t.struct({
    type: ProcedureRouteTypeEnum,
    icao: t.String,
    name: t.String
}, 'BaseSegmentUpdateType');


const RestrictionQualifierEnum = t.enums({
    GT: 'Greater Than',
    LT: 'Less Than'
}, 'RestrictionQualifierEnum');

const RouteSegmentWaypointRestrictionUpdateType = t.struct({
    altitude: t.maybe(t.Number),
    altitudeRestrictionQulifier: t.maybe(RestrictionQualifierEnum),
    speed: t.maybe(t.Number),
    speedRestrictionQulifier: t.maybe(RestrictionQualifierEnum)
}, 'RouteSegmentWaypointRestrictionUpdateType');

const _buildRouteSegmentWaypointUpdateListType = (waypointListEnum) => {
    const RouteSegmentWaypointUpdateType = t.struct({
        name: waypointListEnum,
        restrictions: RouteSegmentWaypointRestrictionUpdateType
    }, 'RouteSegmentWaypointUpdateType');

    return t.list(RouteSegmentWaypointUpdateType, 'RouteSegmentWaypointUpdateListType');
};

export const buildRouteSegmentListType = (trimmedEntryListEnum, waypointListEnum) => {
    const waypointWithRestrictionsListType = _buildRouteSegmentWaypointUpdateListType(waypointListEnum);

    const RouteSegmentType = t.struct({
        name: trimmedEntryListEnum,
        waypoints: waypointWithRestrictionsListType
    }, 'RouteSegmentType');

    return t.list(RouteSegmentType, 'RouteSegmentListType');
};

export const buildInitialProcedureFormType = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    draw: t.list(fixListEnum)
});

export const buildProcedureFormTypeForSid = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    // draw: t.list(fixListEnum),
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum)
    // body: t.list(fixListEnum),
    // exitPoints: buildRouteSegmentListType(fixListEnum, fixListEnum)
});

export const buildProcedureFormTypeForStar = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    draw: t.list(fixListEnum),
    entryPoints: buildRouteSegmentListType(runwayListEnum, fixListEnum),
    body: t.list(fixListEnum),
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum)
});


export function buildProcedureFormType(formValues, fixList, runwayList) {
    const procedureType = _get(formValues, 'type', null);
    const fixListEnum = FixListType.buildFixListEnum(fixList);
    const runwayListEnum = RunwayPairListType.buildRunwayNamesEnum(runwayList);
    let procedureFormType;

    switch (procedureType) {
        case ProcedureRouteTypeEnum.meta.map.SID:
            procedureFormType = buildProcedureFormTypeForSid;

            break;
        // case ProcedureRouteTypeEnum.meta.map.STAR:
        //     procedureFormType = buildProcedureFormTypeForStar;
        //
        //     break;
        default:
            procedureFormType = buildInitialProcedureFormType;

            break;
    }

    return procedureFormType(formValues, runwayListEnum, fixListEnum);
}
