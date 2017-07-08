import t from 'tcomb';

export const Position2dCreationType = t.struct({
    latitude: t.String,
    longitude: t.String
}, 'Position2dCreationType');

Position2dCreationType.prototype.getDisplayValue = function() {
    return [`${this.latitude}`, `${this.longitude}`];
};

export const Position3dCreationType = Position2dCreationType.extend({
    elevation: t.String
}, 'Position3dCreationType');

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
