import ava from 'ava';
import { RadioType } from '../../../src/assets/scripts/client/domain/airport/RadioType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('RadioType', (t) => {
    t.notThrows(() => RadioType(airportJsonMock.radio));
});
