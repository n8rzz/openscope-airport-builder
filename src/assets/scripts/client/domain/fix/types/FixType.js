import t from 'tcomb';
import {
    Position2dCreationType,
    Position2dType
} from '../../base/PositionType';
import { BaseStateType } from '../../base/StateType';

export const FixCreationType = t.struct({
    name: t.String,
    position: Position2dCreationType
}, 'FixCreationType');

FixCreationType.prototype.getPositionDisplay = function() {
    return this.position.getDisplayValue();
}

export const FixImportType = t.struct({
    data: t.String
}, 'FixImportType');

export const FixDict = t.dict(t.String, Position2dType, 'FixDict');

export const FixStateType = BaseStateType.extend({
    payload: t.maybe(FixCreationType)
}, 'FixStateType');
