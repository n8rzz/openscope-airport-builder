import ava from 'ava';
import {
    BaseProcedureRouteType,
    SidProcedureRouteType,
    StarProcedureRouteType,
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from '../../../src/assets/scripts/client/domain/airport/ProcedureRouteType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

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
