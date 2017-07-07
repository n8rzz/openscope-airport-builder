import ava from 'ava';
import {
    FixUpdateType,
    FixListType,
    FixDict
} from '../../../../src/assets/scripts/client/domain/fix/types/FixType';
import {
    fixUpdateTypeMock,
    fixListTypeMock
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
