import t from 'tcomb';
import { Position3dType } from '../base/PositionType';

export const RunwayCreationType = t.struct({
    name: t.String,
    position: Position3dType,
    ils: t.Boolean
}, 'RunwayCreationType');

export const RunwayType = t.struct({
    name: t.list(t.String),
    end: t.list(t.list(t.String)),
    ils: t.list(t.Boolean)
}, 'RunwayType');

export const RunwayListType = t.list(RunwayType, 'RunwayListType');
