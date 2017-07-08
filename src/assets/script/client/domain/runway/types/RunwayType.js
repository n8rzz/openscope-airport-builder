import t from 'tcomb';
import { Position3dType } from '../../base/PositionType';

export const RunwayCreationType = t.struct({
    name: t.String,
    position: Position3dType,
    ils: t.Boolean
}, 'RunwayCreationType');

export const RunwayPreviewType = t.struct({
    name: t.list(t.String),
    end: t.list(t.list(t.String)),
    ils: t.list(t.Boolean)
}, 'RunwayPreviewType');

export const RunwayListPreviewType = t.list(RunwayPreviewType, 'RunwayListPreviewType');
