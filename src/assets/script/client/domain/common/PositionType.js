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

Position3dCreationType.prototype.getDisplayValue = function() {
    return `[${this.latitude}, ${this.longitude}, ${this.elevation}]`;
};

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

export const Position2dType = t.list(PositionValueType, 'Position2dType');

export const Position3dType = t.list(PositionValueType, 'Position3dType');
