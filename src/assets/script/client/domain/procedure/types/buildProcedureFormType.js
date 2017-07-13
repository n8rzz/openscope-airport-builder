import t from 'tcomb';
import _get from 'lodash/get';
import { FixListType } from '../../fix/types/FixType';
import { RunwayPairListType } from '../../runway/types/RunwayType';
import {
    BaseRouteWaypointType,
    ProcedureRouteTypeEnum,
    BaseSegmentUpdateType,
    RouteWaypointRestrictionType
} from '../types/ProcedureType';

const buildSegmentDrawListType = (fixListEnum) => {
    const DrawListType = t.struct({
        drawSegment: t.list(fixListEnum)
    }, 'DrawSegmentType');

    return t.list(DrawListType, 'SegmentDrawListType');
};

const _buildRouteSegmentWaypointUpdateListType = (waypointListEnum) => {
    const RouteSegmentWaypointUpdateType = BaseRouteWaypointType.extend({
        waypointName: waypointListEnum,
        altitude: RouteWaypointRestrictionType,
        speed: RouteWaypointRestrictionType
    }, 'RouteSegmentWaypointUpdateType');

    return t.list(RouteSegmentWaypointUpdateType, 'RouteSegmentWaypointUpdateListType');
};

export const buildRouteSegmentListType = (trimmedEntryListEnum, waypointListEnum) => {
    const RouteSegmentType = t.struct({
        name: trimmedEntryListEnum,
        waypoints: _buildRouteSegmentWaypointUpdateListType(waypointListEnum)
    }, 'RouteSegmentType');

    return t.list(RouteSegmentType, 'RouteSegmentListType');
};

export const buildInitialProcedureFormType = () => BaseSegmentUpdateType;

export const buildSidProcedureFormType = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum),
    body: t.list(fixListEnum),
    exitPoints: buildRouteSegmentListType(fixListEnum, fixListEnum),
    draw: buildSegmentDrawListType(fixListEnum)
}, 'SidProcedureFormType');

export const buildStarProcedureFormType = (formValues, runwayListEnum, fixListEnum) => BaseSegmentUpdateType.extend({
    entryPoints: buildRouteSegmentListType(fixListEnum, runwayListEnum),
    body: t.list(fixListEnum),
    rwy: buildRouteSegmentListType(runwayListEnum, fixListEnum),
    draw: buildSegmentDrawListType(fixListEnum)
}, 'StarProcedureFormType');


export function buildProcedureFormType(formValues, runwayList, fixList) {
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
