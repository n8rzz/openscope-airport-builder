import ava from 'ava';

import {
    SegmentWaypointSingleType,
    SementWaypointListType,
    SegmentSingleType,
    SegmentListType,
    RouteStringTranslationType,
    ProcedureSingleType,
    ProcedureListType
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import {
    segmentWaypointSingleTypeMock,
    segmentWaypointListTypeMock,
    segmentSingleTypeMock,
    segmentListTypeMock,
    procedureSingleTypeMock,
    ProcedureSingleTypeFixture,
    departureRouteStringTranslationTypeMock,
    arrivalRouteStringTranslationTypeMock,
    procedureListTypeMock,
    ProcedureListTypeFixture,
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

ava('RouteStringTranslationType', (t) => {
    t.notThrows(() => RouteStringTranslationType(departureRouteStringTranslationTypeMock));
    t.notThrows(() => RouteStringTranslationType(arrivalRouteStringTranslationTypeMock));
});

ava('RouteStringTranslationType.buildRouteStringListForRoute() returns a list of routeStrings for departure', (t) => {
    const expectedResult = [
        'KLAS.THRVE3.FLICR',
        'KLAS.THRVE33D.FLICR'
    ];
    const model = new RouteStringTranslationType(departureRouteStringTranslationTypeMock);
    const result = model.buildRouteStringListForRoute('KLAS');

    t.deepEqual(result, expectedResult);
});

ava('RouteStringTranslationType.buildRouteStringListForRoute() returns a list of routeStrings for arrival', (t) => {
    const expectedResult = ['FLICR.THRVE3.KLAS'];
    const model = new RouteStringTranslationType(arrivalRouteStringTranslationTypeMock);
    const result = model.buildRouteStringListForRoute('KLAS');

    t.deepEqual(result, expectedResult);
});

ava('ProcedureSingleType.toRouteStringTranslationType()', (t) => {
    const result = ProcedureSingleTypeFixture.toRouteStringTranslationType();

    t.deepEqual(result.icaoList, ['COWBY6', 'COWBY63D']);
    t.true(result.entryList[0] === '07L');
    t.true(result.baseList[0] === 'COWBY');
    t.true(result.exitList[0] === 'FLICR');
});

ava('ProcedureListType', (t) => {
    t.notThrows(() => ProcedureListType(procedureListTypeMock));
});

ava('ProcedureListType.proceduresForCategory() throws when passed an invalid category', (t) => {
    t.throws(() => ProcedureListType.findProceduresByCategory(ProcedureListTypeFixture, 'threeve'));
});

ava('ProcedureListType.proceduresForCategory() returns all procedures for a specific category', (t) => {
    let result = ProcedureListType.findProceduresByCategory(ProcedureListTypeFixture, 'DEPARTURE');

    t.true(result.length === 2);
    t.true(result[0].type === 'SID');
    t.true(result[1].type === 'SID');

    result = ProcedureListType.findProceduresByCategory(ProcedureListTypeFixture, 'ARRIVAL');

    t.true(result.length === 1);
    t.true(result[0].type === 'STAR');
});

ava('ProcedureListType.buildRouteStringList() throws when passed invalid data', (t) => {
    t.throws(() => ProcedureListType.buildRouteStringList(false));
    t.notThrows(() => ProcedureListType.buildRouteStringList(ProcedureListTypeFixture, 'KLAS', 'DEPARTURE'));
});

ava('ProcedureListType.buildRouteStringList() builds an enum with all available route strings', (t) => {
    const expectedResult = [
        'KLAS.COWBY6.FLICR',
        'KLAS.COWBY63D.FLICR',
        'KLAS.THRVE3.FLICR',
        'KLAS.THRVE33D.FLICR'
    ];
    const result = ProcedureListType.buildRouteStringList(ProcedureListTypeFixture, 'KLAS', 'DEPARTURE');

    t.deepEqual(result, expectedResult);
});
