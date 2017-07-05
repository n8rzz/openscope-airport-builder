import ava from 'ava';
import {
    AirspaceType,
    AirspaceListType
} from '../../../src/assets/scripts/client/domain/airport/AirspaceType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('AirspaceType', (t) => {
    t.notThrows(() => AirspaceType(airportJsonMock.airspace[0]));
});

ava('AirspaceListType', (t) => {
    t.notThrows(() => AirspaceListType(airportJsonMock.airspace));
});
