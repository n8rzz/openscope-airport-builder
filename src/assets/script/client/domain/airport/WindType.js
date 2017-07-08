import t from 'tcomb';

export const WindType = t.struct({
    angle: t.Number,
    speed: t.Number
}, 'WindType');
