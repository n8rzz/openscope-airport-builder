import ava from 'ava';
import {
    BaseSegmentType,
    BaseWaypointRestrictionType,
    RouteWaypointRestrictionType,
    buildDrawListFormType,
    BaseProcedureRoutePreviewType,
    SidProcedureRoutePreviewType,
    StarProcedureRoutePreviewType,
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import { FixListEnumFixture } from '../../fix/_mocks/fixMocks';
import {
    baseSegmentTypeMock,
    baseWaypointRestrictionTypeMock,
    waypointRestrictionMinMaxTypeMock,
    waypointRestrictionLtGtTypeMock,
    waypointRestrictionMaintainMock
} from '../_mocks/procedureMocks';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('BaseSegmentType', (t) => {
    t.notThrows(() => BaseSegmentType(baseSegmentTypeMock));
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

ava('.buildDrawListFormType()', (t) => {
    t.notThrows(() => buildDrawListFormType());
    t.notThrows(() => buildDrawListFormType(FixListEnumFixture));
});

ava('BaseProcedureRoutePreviewType', (t) => {
    t.notThrows(() => BaseProcedureRoutePreviewType(airportJsonMock.stars.GRNPA1));
    t.notThrows(() => BaseProcedureRoutePreviewType(airportJsonMock.sids.COWBY6));
});

ava('SidProcedureRoutePreviewType', (t) => {
    t.notThrows(() => SidProcedureRoutePreviewType(airportJsonMock.sids.COWBY6));
});

ava('SidProcedureRouteDict', (t) => {
    t.notThrows(() => SidProcedureRouteDict(airportJsonMock.sids));
});

ava('StarProcedureRoutePreviewType', (t) => {
    t.notThrows(() => StarProcedureRoutePreviewType(airportJsonMock.stars.GRNPA1));
});

ava('StarProcedureRouteDict', (t) => {
    t.notThrows(() => StarProcedureRouteDict(airportJsonMock.stars));
});
