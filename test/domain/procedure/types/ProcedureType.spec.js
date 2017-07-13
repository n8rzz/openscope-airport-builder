import ava from 'ava';
import {
    BaseSegmentUpdateType,
    MinMaxRestrictionType,
    LessThenGreaterThanRestrictionType,
    BaseWaypointRestrictionType,
    RouteSegmentWaypointRestrictionType,
    BaseProcedureRouteType,
    SidProcedureRouteType,
    StarProcedureRouteType,
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import {
    baseSegmentUpdateTypeMock,
    minMaxRestrictionTypeMock,
    lessThenGreaterThanRestrictionTypeMock,
    baseWaypointRestrictionTypeMock,
    routeSegmentWaypointRestrictionMinMaxTypeMock,
    routeSegmentWaypointRestrictionLtGtTypeMock
} from '../_mocks/procedureMocks';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('BaseSegmentUpdateType', (t) => {
    t.notThrows(() => BaseSegmentUpdateType(baseSegmentUpdateTypeMock));
});

ava('MinMaxRestrictionType', (t) => {
    t.notThrows(() => MinMaxRestrictionType(minMaxRestrictionTypeMock));
});

ava('LessThenGreaterThanRestrictionType', (t) => {
    t.notThrows(() => LessThenGreaterThanRestrictionType(lessThenGreaterThanRestrictionTypeMock));
});

ava('BaseWaypointRestrictionType', (t) => {
    t.notThrows(() => BaseWaypointRestrictionType(baseWaypointRestrictionTypeMock));
});

ava('RouteSegmentWaypointRestrictionType', (t) => {
    t.notThrows(() => RouteSegmentWaypointRestrictionType({ restrictionQualifier: undefined }));
    t.notThrows(() => RouteSegmentWaypointRestrictionType(routeSegmentWaypointRestrictionMinMaxTypeMock));
    t.notThrows(() => RouteSegmentWaypointRestrictionType(routeSegmentWaypointRestrictionLtGtTypeMock));
});

ava('BaseProcedureRouteType', (t) => {
    t.notThrows(() => BaseProcedureRouteType(airportJsonMock.stars.GRNPA1));
    t.notThrows(() => BaseProcedureRouteType(airportJsonMock.sids.COWBY6));
});

ava('SidProcedureRouteType', (t) => {
    t.notThrows(() => SidProcedureRouteType(airportJsonMock.sids.COWBY6));
});

ava('SidProcedureRouteDict', (t) => {
    t.notThrows(() => SidProcedureRouteDict(airportJsonMock.sids));
});

ava('StarProcedureRouteType', (t) => {
    t.notThrows(() => StarProcedureRouteType(airportJsonMock.stars.GRNPA1));
});

ava('StarProcedureRouteDict', (t) => {
    t.notThrows(() => StarProcedureRouteDict(airportJsonMock.stars));
});
