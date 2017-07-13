import t from 'tcomb';
import _get from 'lodash/get';
import { FixListType } from '../../fix/types/FixType';
import { RunwayPairListType } from '../../runway/types/RunwayType';
import {
    ProcedureRouteTypeEnum,
    BaseSegmentUpdateType,
    RouteSegmentWaypointRestrictionType
} from '../types/ProcedureType';

const _buildRouteSegmentWaypointUpdateListType = (waypointListEnum) => {
    const RouteSegmentWaypointUpdateType = t.struct({
        waypointName: waypointListEnum,
        altitude: RouteSegmentWaypointRestrictionType,
        speed: RouteSegmentWaypointRestrictionType
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

export const buildInitialProcedureFormType = () => BaseSegmentUpdateType;

export const buildSidProcedureFormType = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum),
    body: t.list(fixListEnum),
    exitPoints: buildRouteSegmentListType(fixListEnum, fixListEnum),
    draw: t.list(fixListEnum)
}, 'SidProcedureFormType');

export const buildStarProcedureFormType = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    entryPoints: buildRouteSegmentListType(fixListEnum, runwayListEnum),
    body: t.list(fixListEnum),
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum),
    draw: t.list(fixListEnum)
}, 'StarProcedureFormType');


export function buildProcedureFormType(formValues, fixList, runwayList) {
    const procedureType = _get(formValues, 'type', null);
    const fixListEnum = FixListType.buildFixListEnum(fixList);
    const runwayListEnum = RunwayPairListType.buildRunwayNamesEnum(runwayList);
    let procedureFormType;

    switch (procedureType) {
        case ProcedureRouteTypeEnum.meta.map.SID:
            procedureFormType = buildSidProcedureFormType;

            break;
        case ProcedureRouteTypeEnum.meta.map.STAR:
            procedureFormType = buildStarProcedureFormType;

            break;
        default:
            procedureFormType = buildInitialProcedureFormType;

            break;
    }

    return procedureFormType(formValues, runwayListEnum, fixListEnum);
}
