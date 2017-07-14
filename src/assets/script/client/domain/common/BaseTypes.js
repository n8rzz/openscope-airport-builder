import t from 'tcomb';

export const MinMaxValueType = t.struct({
    minValue: t.Number,
    maxValue: t.Number
}, 'MinMaxValueType');

export const SingleNumberValueType = t.struct({
    value: t.Number
}, 'SingleNumberValueType');


const StringOrNumberType = t.union([t.String, t.Number], 'StringOrNumberType');
const StringOrNumberTypeList = t.list(StringOrNumberType);

export const TwoElementStringOrNumberTypeList = t.refinement(StringOrNumberTypeList, (v) => v.length === 2);
export const ThreeElementStringOrNumberTypeList = t.refinement(StringOrNumberTypeList, (v) => v.length === 3);
