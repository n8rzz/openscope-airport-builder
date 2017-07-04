import t from 'tcomb';

const POSITION_VALUE_LENGTH = {
    TWO_D: 2,
    THREE_D: 3
};

export const Position3dType = (value = []) => {
    if (value.length !== POSITION_VALUE_LENGTH.THREE_D) {
        throw new TypeError(`Position3dType expected 3 elements but received ${value.length}`);
    }

    return t.list(t.String, 'Position3dType');
};

export const Position2dType = (value = []) => {
    if (value.length !== POSITION_VALUE_LENGTH.TWO_D) {
        throw new TypeError(`Position2dType expected 2 elements but received ${value.length}`);
    }

    return t.union([
        t.list(t.Number),
        t.list(t.String)
    ]);
};
