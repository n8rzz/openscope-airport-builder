import ava from 'ava';
import {
    BaseSpawnPatternType,
    DepartureSpawnPatternType,
    ArrivalSpawnPatternType,
    BaseSpawnPatternPreviewType,
    SpawnPatternListType
} from '../../../../src/assets/script/client/domain/spawnPattern/types/SpawnPatternType';
import {
    baseSpawnPatternTypeMock,
    departureSpawnPatternTypeMock,
    arrivalSpawnPatternTypeMock,
    // spawnPatternMock,
    // spawnPatternListMock,
    spawnPatternPreviewMock,
    spawnPatternPreviewListMock
} from '../_mocks/spawnPatternMocks';

ava('BaseSpawnPatternType', (t) => {
    t.notThrows(() => BaseSpawnPatternType(baseSpawnPatternTypeMock));
});

ava('DepartureSpawnPatternType', (t) => {
    t.notThrows(() => DepartureSpawnPatternType(departureSpawnPatternTypeMock));
});

ava('ArrivalSpawnPatternType', (t) => {
    t.notThrows(() => ArrivalSpawnPatternType(arrivalSpawnPatternTypeMock));
});

ava('BaseSpawnPatternPreviewType', (t) => {
    t.notThrows(() => BaseSpawnPatternPreviewType(spawnPatternPreviewMock));
});

ava('SpawnPatternListType', (t) => {
    t.notThrows(() => SpawnPatternListType(spawnPatternPreviewListMock));
});
