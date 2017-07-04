import ava from 'ava';
import { WindType } from '../../../src/assets/scripts/domain/airport/WindType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('WindType', (t) => {
    t.notThrows(() => WindType(airportJsonMock.wind));
});
