import ava from 'ava';
import {
    BaseSpawnPatternType,
    SpawnPatternListType,
    NumberOrTupleNumber
} from '../../../src/assets/scripts/client/domain/airport/SpawnPatternType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('BaseSpawnPatternType', (t) => {
    t.notThrows(() => BaseSpawnPatternType(airportJsonMock.spawnPatterns[0]));
});

ava('SpawnPatternListType', (t) => {
    t.notThrows(() => SpawnPatternListType(airportJsonMock.spawnPatterns));
});

ava('NumberOrTupleNumber', (t) => {
    t.notThrows(() => NumberOrTupleNumber(123));
    t.notThrows(() => NumberOrTupleNumber([123, 456]));
    t.throws(() => NumberOrTupleNumber('threeve'));
});
