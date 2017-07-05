import t from 'tcomb';

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

export const SpawnPatternAirlineEntryType = t.tuple([t.String, t.Number], 'SpawnPatternAirlineEntryType');

export const NumberOrTupleNumber = t.union([
    t.Number,
    t.tuple([t.Number, t.Number])
], 'NumberOrTupleNumber');

export const BaseSpawnPatternType = t.struct({
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
}, 'BaseSpawnPatternType');

export const SpawnPatternListType = t.list(BaseSpawnPatternType, 'SpawnPatternListType');

// export const ArrivalSpawnPatternType = BaseSpawnPatternType.extend({}, 'ArrivalSpawnPatternType');
// export const DepartureSpawnPatternType = BaseSpawnPatternType.extend({}, 'DepartureSpawnPatternType');
