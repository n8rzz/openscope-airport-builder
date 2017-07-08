import ava from 'ava';
import {
    FixUpdateType,
    FixListType,
    FixDict,
    FixImportParsedCsvType,
    FixImportParsedCsvListType
} from '../../../../src/assets/script/client/domain/fix/types/FixType';
import {
    fixUpdateTypeMock,
    fixListTypeMock,
    fixImportParsedCsvTypeMock,
    fixImportParsedCsvListTypeMock,
    FixImportParsedCsvTypeFixture
} from '../_mocks/fixMocks';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('FixUpdateType', (t) => {
    t.notThrows(() => FixUpdateType(fixUpdateTypeMock));
});

ava('FixListType', (t) => {
    t.notThrows(() => FixListType(fixListTypeMock));
});

ava('FixDict', (t) => {
    t.notThrows(() => FixDict(airportJsonMock.fixes));
});

ava('FixImportParsedCsvType', (t) => {
    t.notThrows(() => FixImportParsedCsvType(fixImportParsedCsvTypeMock));
});

ava('FixImportParsedCsvType.toFixUpdateType()', (t) => {
    t.notThrows(() => FixImportParsedCsvTypeFixture.toFixUpdateType());

    const result = FixImportParsedCsvTypeFixture.toFixUpdateType();
    t.true(FixUpdateType.is(result));
});

ava('FixImportParsedCsvListType', (t) => {
    t.notThrows(() => FixImportParsedCsvListType(fixImportParsedCsvListTypeMock));
});
