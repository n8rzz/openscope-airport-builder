import ava from 'ava';

import {
    SegmentWaypointSingleType,
    SementWaypointListType,
    SegmentSingleType,
    SegmentListType,
    ProcedureSingleType,
    ProcedureListType
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import {
    segmentWaypointSingleTypeMock,
    segmentWaypointListTypeMock,
    segmentSingleTypeMock,
    segmentListTypeMock,
    procedureSingleTypeMock,
    procedureListTypeMock,
    sidProcedureFormValueMock,
    starProcedureFormValueMock
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

ava('ProcedureSingleType', (t) => {
    t.notThrows(() => ProcedureSingleType(procedureSingleTypeMock));
    t.notThrows(() => ProcedureSingleType(sidProcedureFormValueMock));
    t.notThrows(() => ProcedureSingleType(starProcedureFormValueMock));
});

ava('ProcedureListType', (t) => {
    t.notThrows(() => ProcedureListType(procedureListTypeMock));
});
