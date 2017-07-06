import ava from 'ava';
import { AirportType } from '../../../../src/assets/scripts/client/domain/baseAirport/types/AirportType';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('AirportType', (t) => {
    t.notThrows(() => AirportType(airportJsonMock));
});
