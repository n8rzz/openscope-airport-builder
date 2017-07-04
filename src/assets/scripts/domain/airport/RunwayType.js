import t from 'tcomb';

export const RunwayType = t.struct({
    name: t.Any,
    end: t.Any,
    ils: t.Any
}, 'RunwayType');

export const RunwayListType = t.list(RunwayType, 'RunwayListType');
