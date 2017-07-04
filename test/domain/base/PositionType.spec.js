import ava from 'ava';
import {
    Position3dType,
    Position2dType
} from '../../../src/assets/scripts/domain/base/PositionType';
import {
    POSITION_3D_MOCK,
    POSITION_2D_STR_MOCK,
    POSITION_2D_INT_MOCK,
    POSITION_2D_MIXED_MOCK
} from '../../_mocks/positionMock';

ava('Position2dType', (t) => {
    t.notThrows(() => Position2dType(POSITION_2D_STR_MOCK));
    t.notThrows(() => Position2dType(POSITION_2D_INT_MOCK));
    t.notThrows(() => Position2dType(POSITION_2D_MIXED_MOCK));
    t.throws(() => Position2dType(POSITION_3D_MOCK));
});

ava('Position3dType', (t) => {
    t.notThrows(() => Position3dType(POSITION_3D_MOCK));
    t.throws(() => Position3dType(POSITION_2D_STR_MOCK));
});
