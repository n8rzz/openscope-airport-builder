import t from 'tcomb';
import { Position2dType } from '../base/PositionType';

export const AirspaceClassEnum = t.enums.of([
    'B',
    'C'
], 'AirspaceClassEnum');

export const AirspaceType = t.struct({
    floor: t.Number,
    ceiling: t.Number,
    airspace_class: AirspaceClassEnum,
    poly: t.list(Position2dType)
}, 'AirspaceType');

export const AirspaceListType = t.list(AirspaceType, 'AirspaceListType');
