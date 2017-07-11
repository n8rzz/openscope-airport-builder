import ava from 'ava';
import {
    RunwayPairType,
    RunwayPairListType,
    RunwayPreviewType,
    RunwayListPreviewType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import {
    runwayPairTypeMock,
    RunwayPairListTypeFixture,
    runwayPreviewTypeMock,
    runwayPreviewListTypeMock
} from '../_mocks/runwayMocks';

ava('RunwayPairType', (t) => {
    t.notThrows(() => RunwayPairType(runwayPairTypeMock));
});

ava('RunwayPairListType.buildRunwayNamesEnum', (t) => {
    const result = RunwayPairListType.buildRunwayNamesEnum(RunwayPairListTypeFixture);

    t.true(result.meta.name === 'RunwayNamesEnum');
});

ava('RunwayPreviewType', (t) => {
    t.notThrows(() => RunwayPreviewType(runwayPreviewTypeMock));
});

ava('RunwayListPreviewType', (t) => {
    t.notThrows(() => RunwayListPreviewType(runwayPreviewListTypeMock));
});
