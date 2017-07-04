import t from 'tcomb';

export const RunwayType = t.struct({
    name: t.list(t.String),
    end: t.list(t.list(t.String)),
    ils: t.list(t.Boolean)
}, 'RunwayType');

export const RunwayListType = t.list(RunwayType, 'RunwayListType');
