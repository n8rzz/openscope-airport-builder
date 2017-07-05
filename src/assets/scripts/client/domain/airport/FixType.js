import t from 'tcomb'
import {
    Position2dCreationType,
    Position2dType
} from '../base/PositionType';

export const FixCreationType = t.struct({
    name: t.String,
    position: Position2dCreationType
}, 'FixCreationType');

export const FixImportType = t.struct({
    data: t.String
}, 'FixImportType');

// FixImportType.prototype.parseCsvToJson = function parseCsvToJson(data) {
//     if (!FixImportType.is(data)) {
//         throw new TypeError('Invalid data passed to .parseCsvToJson()');
//     }
//
//     console.log('.parseCsvToJson()', data);
// }

export const FixDict = t.dict(t.String, Position2dType, 'FixDict');
