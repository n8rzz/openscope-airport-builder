import t from 'tcomb';

const StringOrNumberType = t.union([t.String, t.Number], 'StringOrNumberType');
const StringOrNumberTypeList = t.list(StringOrNumberType);

export const TwoElementStringOrNumberTypeList = t.refinement(StringOrNumberTypeList, (v) => v.length === 2);
export const ThreeElementStringOrNumberTypeList = t.refinement(StringOrNumberTypeList, (v) => v.length === 3);
