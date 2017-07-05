import ava from 'ava';
import { FixDict } from '../../../src/assets/scripts/client/domain/airport/FixType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('FixDict', (t) => {
    t.notThrows(() => FixDict(airportJsonMock.fixes));
});
