import t from 'tcomb';
import { NumberOrTupleNumber } from '../common/BaseTypes';

export const SpawnPatternCategoryEnum = t.enums.of([
    'arrival',
    'departure'
], 'SpawnPatternCategoryEnum');

export const SpawnPatternMethodEnum = t.enums.of([
    'cyclic',
    'surge',
    'random',
    'wave'
], 'SpawnPatternMethodEnum');

// Update Types
export const BaseSpawnPatternType = t.struct({
    category: SpawnPatternCategoryEnum,
    route: t.String,
    method: SpawnPatternMethodEnum,
    entrail: t.maybe(NumberOrTupleNumber),
    rate: t.Number
}, 'BaseSpawnPatternType');

export const DepartureSpawnPatternType = BaseSpawnPatternType.extend({
    origin: t.String
}, 'DepartureSpawnPatternType');

export const ArrivalSpawnPatternType = BaseSpawnPatternType.extend({
    destination: t.String,
    altitude: NumberOrTupleNumber,
    speed: t.Number
}, 'ArrivalSpawnPatternType');

// Preview Types
export const SpawnPatternAirlineEntryType = t.tuple([t.String, t.Number], 'SpawnPatternAirlineEntryType');

export const BaseSpawnPatternPreviewType = t.struct({
    origin: t.String,
    destination: t.String,
    category: SpawnPatternCategoryEnum,
    route: t.String,
    altitude: NumberOrTupleNumber,
    method: SpawnPatternMethodEnum,
    entrail: t.list(t.Number),
    offset: t.maybe(t.Number),
    period: t.maybe(t.Number),
    rate: t.Number,
    airlines: t.list(SpawnPatternAirlineEntryType)
}, 'BaseSpawnPatternPreviewType');

export const SpawnPatternListType = t.list(BaseSpawnPatternPreviewType, 'SpawnPatternListType');
