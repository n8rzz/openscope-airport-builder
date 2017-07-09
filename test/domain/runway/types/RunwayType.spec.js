import ava from 'ava';
import {
    RunwayPairType,
    RunwayPreviewType,
    RunwayListPreviewType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import {
    runwayPairTypeMock,
    runwayPreviewTypeMock,
    runwayPreviewListTypeMock
} from '../_mocks/runwayMocks';

ava('RunwayPairType', (t) => {
    t.notThrows(() => RunwayPairType(runwayPairTypeMock));
});

ava('RunwayPreviewType', (t) => {
    t.notThrows(() => RunwayPreviewType(runwayPreviewTypeMock));
});

ava('RunwayListPreviewType', (t) => {
    t.notThrows(() => RunwayListPreviewType(runwayPreviewListTypeMock));
});
