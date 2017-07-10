import t from 'tcomb';
import { BaseStateType } from '../../common/StateType';
import { Position3dCreationType } from '../../common/PositionType';

const RunwayUpdateType = t.struct({
    name: t.String,
    position: Position3dCreationType,
    ils: t.Boolean
}, 'RunwayUpdateType');

export const RunwayPairType = t.struct({
    runwayLeft: RunwayUpdateType,
    runwayRight: RunwayUpdateType
}, 'RunwayPairType');

export const RunwayPairListType = t.list(RunwayPairType, 'RunwayPairListType');

export const RunwayPreviewType = t.struct({
    name: t.list(t.String),
    end: t.list(t.list(t.String)),
    ils: t.list(t.Boolean)
}, 'RunwayPreviewType');

export const RunwayListPreviewType = t.list(RunwayPreviewType, 'RunwayListPreviewType');

export const RunwayPairStateType = BaseStateType.extend({
    payload: t.maybe(RunwayPairType)
}, 'RunwayPairStateType');

export const RunwayListStateType = BaseStateType.extend({
    payload: t.maybe(RunwayPairListType)
}, 'RunwayListStateType');
