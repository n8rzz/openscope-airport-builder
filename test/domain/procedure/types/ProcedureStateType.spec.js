import ava from 'ava';

import {
    SegmentWaypointSingleType,
    SementWaypointListType,
    SegmentSingleType,
    SegmentListType,
    // BaseProcedureSingleType,
    // SidProcedureSingleType,
    // StarProcedureSingleType
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import {
    segmentWaypointSingleTypeMock,
    segmentWaypointListTypeMock,
    segmentSingleTypeMock,
    segmentListTypeMock
    // sidProcedureFormValueMock,
    // starProcedureFormValueMock
} from '../_mocks/procedureMocks';

ava('SegmentWaypointSingleType', (t) => {
    t.notThrows(() => SegmentWaypointSingleType(segmentWaypointSingleTypeMock));
});

ava('SementWaypointListType', (t) => {
    t.notThrows(() => SementWaypointListType(segmentWaypointListTypeMock));
});

ava('SegmentSingleType', (t) => {
    t.notThrows(() => SegmentSingleType(segmentSingleTypeMock));
});

ava('SegmentListType', (t) => {
    t.notThrows(() => SegmentListType(segmentListTypeMock));
});

// ava('BaseProcedureSingleType', (t) => {
//     t.notThrows(() => BaseProcedureSingleType());
// });
//
// ava('SidProcedureSingleType', (t) => {
//     t.notThrows(() => SidProcedureSingleType());
// });
//
// ava('StarProcedureSingleType', (t) => {
//     t.notThrows(() => StarProcedureSingleType());
// });
