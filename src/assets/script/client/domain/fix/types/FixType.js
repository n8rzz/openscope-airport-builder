import t from 'tcomb';
import _map from 'lodash/map';
import {
    Position2dCreationType,
    Position2dType
} from '../../common/PositionType';
import { BaseStateType } from '../../common/StateType';

export const FixUpdateType = t.struct({
    name: t.String,
    position: Position2dCreationType
}, 'FixUpdateType');

FixUpdateType.prototype.getPositionDisplay = function() {
    return this.position.getDisplayValue();
};

export const FixListType = t.list(t.maybe(FixUpdateType));

FixListType.buildFixListEnum = function(fixList) {
    if (!FixListType.is(fixList)) {
        throw new TypeError('Invalid data passed to FixListType.buildFixListEnum()');
    }

    const fixNames = _map(fixList, (fix) => fix.name);

    return t.enums.of(fixNames, 'FixListEnum');
};

export const FixImportType = t.struct({
    data: t.String
}, 'FixImportType');


export const FixStateType = BaseStateType.extend({
    payload: t.maybe(FixUpdateType)
}, 'FixStateType');

export const FixListStateType = BaseStateType.extend({
    payload: FixListType
});

export const FixDict = t.dict(t.String, Position2dType, 'FixDict');

export const FixImportParsedCsvType = t.struct({
    name: t.String,
    latitude: t.String,
    longitude: t.String
}, 'FixImportParsedCsvType');

FixImportParsedCsvType.prototype.toFixUpdateType = function toFixUpdateType() {
    return new FixUpdateType({
        name: this.name,
        position: {
            latitude: this.latitude,
            longitude: this.longitude
        }
    });
};

export const FixImportParsedCsvListType = t.list(FixImportParsedCsvType, 'FixImportParsedCsvListType');
