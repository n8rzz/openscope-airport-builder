import ava from 'ava';
import {
    BaseSegmentUpdateType,
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
    baseWaypointRestrictionTypeMock,
    waypointRestrictionMinMaxTypeMock,
    waypointRestrictionLtGtTypeMock,
    waypointRestrictionMaintainMock
} from '../_mocks/procedureMocks';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('BaseSegmentUpdateType', (t) => {
    t.notThrows(() => BaseSegmentUpdateType(baseSegmentUpdateTypeMock));
});

ava('BaseWaypointRestrictionType', (t) => {
    t.notThrows(() => BaseWaypointRestrictionType(baseWaypointRestrictionTypeMock));
});

ava('RouteWaypointRestrictionType', (t) => {
    t.notThrows(() => RouteWaypointRestrictionType({ restrictionQualifier: undefined }));
    t.notThrows(() => RouteWaypointRestrictionType(waypointRestrictionMaintainMock));
    t.notThrows(() => RouteWaypointRestrictionType(waypointRestrictionMinMaxTypeMock));
    t.notThrows(() => RouteWaypointRestrictionType(waypointRestrictionLtGtTypeMock));
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
