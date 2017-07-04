import ava from 'ava';
import tcomb from 'tcomb';
import { RadioType } from '../../../src/assets/scripts/domain/airport/RadioType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('RadioType', (t) => {
    t.notThrows(() => RadioType(airportJsonMock.radio));
});
