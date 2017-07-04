import t from 'tcomb';

// const POSITION_VALUE_LENGTH = {
//     TWO_D: 2,
//     THREE_D: 3
// };

export const PositionValueType = t.union([
    t.String,
    t.Number
], 'PositionValueType');
PositionValueType.dispatch = (v) => {
    if (t.String.is(v)) {
        return t.String;
    }

    return t.Number;
};

export const Position2dType = t.list(PositionValueType);

export const Position3dType = t.refinement(Position2dType, (v) => t.Any.is(v), 'Position3dType');
