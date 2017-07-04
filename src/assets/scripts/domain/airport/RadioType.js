import t from 'tcomb';

export const RadioType = t.struct({
    twr: t.String,
    app: t.String,
    dep: t.String
}, 'RadioType');
