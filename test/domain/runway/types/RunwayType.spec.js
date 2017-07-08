import ava from 'ava';
import {
    RunwayPreviewType,
    RunwayListPreviewType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import { airportJsonMock } from '../../../_mocks/airportJsonMock';

ava('RunwayPreviewType', (t) => {
    t.notThrows(() => RunwayPreviewType(airportJsonMock.runways[0]));
});

ava('RunwayListPreviewType', (t) => {
    t.notThrows(() => RunwayListPreviewType(airportJsonMock.runways));
});
