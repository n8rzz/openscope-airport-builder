import ava from 'ava';
import {
    RunwayType,
    RunwayListType
} from '../../../src/assets/scripts/domain/airport/RunwayType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('RunwayType', (t) => {
    t.notThrows(() => RunwayType(airportJsonMock.runways[0]));
});

ava('RunwayListType', (t) => {
    t.notThrows(() => RunwayListType(airportJsonMock.runways));
});
