import t from 'tcomb'
import { Position2dType } from '../base/PositionType';

export const FixDict = t.dict(t.String, Position2dType, 'FixDict');
