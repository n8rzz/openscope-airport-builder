import t from 'tcomb';
import { BaseStateType } from '../../common/StateType';
import { Position3dCreationType } from '../../common/PositionType';

export const RunwayUpdateType = t.struct({
    name: t.String,
    position: Position3dCreationType,
    ils: t.Boolean,
    relatedTo: t.String
}, 'RunwayUpdateType');

export const RunwayPreviewType = t.struct({
    name: t.list(t.String),
    end: t.list(t.list(t.String)),
    ils: t.list(t.Boolean)
}, 'RunwayPreviewType');

export const RunwayListPreviewType = t.list(RunwayPreviewType, 'RunwayListPreviewType');

export const RunwaySingleStateType = BaseStateType.extend({
    payload: t.maybe(RunwayUpdateType)
}, 'RunwaySingleStateType');
