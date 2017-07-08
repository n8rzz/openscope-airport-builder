import ava from 'ava';
import {
    RunwayUpdateType,
    RunwayPreviewType,
    RunwayListPreviewType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import {
    runwayUpdateTypeMock,
    runwayPreviewTypeMock,
    runwayPreviewListTypeMock
} from '../_mocks/runwayMocks';


ava('RunwayUpdateType', (t) => {
    t.notThrows(() => RunwayUpdateType(runwayUpdateTypeMock));
});

ava('RunwayPreviewType', (t) => {
    t.notThrows(() => RunwayPreviewType(runwayPreviewTypeMock));
});

ava('RunwayListPreviewType', (t) => {
    t.notThrows(() => RunwayListPreviewType(runwayPreviewListTypeMock));
});
