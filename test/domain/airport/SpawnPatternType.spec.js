import ava from 'ava';
import tcomb from 'tcomb';
import {
    BaseSpawnPatternType,
    NumberOrTupleNumber
} from '../../../src/assets/scripts/domain/airport/SpawnPatternType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('BaseSpawnPatternType', (t) => {
    t.notThrows(() => BaseSpawnPatternType(airportJsonMock.spawnPatterns[0]));
});

ava('NumberOrTupleNumber', (t) => {
    t.notThrows(() => NumberOrTupleNumber(123));
    t.notThrows(() => NumberOrTupleNumber([123, 456]));
    t.throws(() => NumberOrTupleNumber('threeve'));
});
