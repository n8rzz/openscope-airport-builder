import ava from 'ava';
import {
    BaseSegmentUpdateType,
    MinMaxValueType,
    LessThenGreaterThanValueType,
    BaseWaypointRestrictionType,
    RouteWaypointRestrictionType,
    BaseProcedureRouteType,
    SidProcedureRouteType,
    StarProcedureRouteType,
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import {
    baseSegmentUpdateTypeMock,
    minMaxValueTypeMock,
    lessThenGreaterThanValueTypeMock,
    baseWaypointRestrictionTypeMock,
    routeSegmentWaypointRestrictionMinMaxTypeMock,
    routeSegmentWaypointRestrictionLtGtTypeMock
} from '../_mocks/procedureMocks';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('BaseSegmentUpdateType', (t) => {
    t.notThrows(() => BaseSegmentUpdateType(baseSegmentUpdateTypeMock));
});

ava('MinMaxValueType', (t) => {
    t.notThrows(() => MinMaxValueType(minMaxValueTypeMock));
});

ava('LessThenGreaterThanValueType', (t) => {
    t.notThrows(() => LessThenGreaterThanValueType(lessThenGreaterThanValueTypeMock));
});

ava('BaseWaypointRestrictionType', (t) => {
    t.notThrows(() => BaseWaypointRestrictionType(baseWaypointRestrictionTypeMock));
});

ava('RouteWaypointRestrictionType', (t) => {
    t.notThrows(() => RouteWaypointRestrictionType({ restrictionQualifier: undefined }));
    t.notThrows(() => RouteWaypointRestrictionType(routeSegmentWaypointRestrictionMinMaxTypeMock));
    t.notThrows(() => RouteWaypointRestrictionType(routeSegmentWaypointRestrictionLtGtTypeMock));
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
