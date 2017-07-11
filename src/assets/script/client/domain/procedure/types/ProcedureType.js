import t from 'tcomb';

// PreviewTypes
// Update types will need to be translated into these types
export const RouteSegmentWaypointType = t.union([
    t.String,
    t.tuple([t.String, t.String])
], 'RouteSegmentWaypointType');

export const RouteSegmentWaypointListType = t.list(RouteSegmentWaypointType, 'RouteSegmentWaypointListType');

export const BaseProcedureRouteType = t.struct({
    icao: t.String,
    name: t.String,
    suffix: t.dict(t.String, t.String),
    body: RouteSegmentWaypointListType,
    rwy: t.dict(t.String, RouteSegmentWaypointListType),
    draw: t.list(t.list(t.String))
}, 'ProcedureRouteType');

export const SidProcedureRouteType = BaseProcedureRouteType.extend({
    exitPoints: t.dict(t.String, RouteSegmentWaypointListType)
}, 'StarProcedureRouteType');

export const SidProcedureRouteDict = t.dict(t.String, SidProcedureRouteType);

export const StarProcedureRouteType = BaseProcedureRouteType.extend({
    entryPoints: t.dict(t.String, RouteSegmentWaypointListType)
}, 'StarProcedureRouteType');

export const StarProcedureRouteDict = t.dict(t.String, StarProcedureRouteType);
