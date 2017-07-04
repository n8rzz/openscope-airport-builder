import t from 'tcomb';

// const POSITION_VALUE_LENGTH = {
//     TWO_D: 2,
//     THREE_D: 3
// };

export const Position2dType = t.union([
    t.list(t.String),
    t.list(t.Number)
], 'Position2dType');

export const Position3dType = t.refinement(Position2dType, (v) => t.Any.is(v), 'Position3dType');
