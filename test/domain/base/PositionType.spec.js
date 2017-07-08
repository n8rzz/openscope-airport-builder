import ava from 'ava';
import {
    Position2dCreationType,
    Position3dCreationType,
    Position3dType,
    Position2dType
} from '../../../src/assets/script/client/domain/common/PositionType';
import {
    POSITION_2D_CREATION_MOCK,
    POSITION_3D_CREATION_MOCK,
    POSITION_3D_MOCK,
    POSITION_2D_STR_MOCK,
    POSITION_2D_INT_MOCK
} from '../../_mocks/positionMock';

ava('Position2dCreationType', (t) => {
    t.notThrows(() => Position2dCreationType(POSITION_2D_CREATION_MOCK));
});

ava('Position3dCreationType', (t) => {
    t.notThrows(() => Position3dCreationType(POSITION_3D_CREATION_MOCK));
});

ava('Position2dType', (t) => {
    t.notThrows(() => Position2dType(POSITION_2D_STR_MOCK));
    t.notThrows(() => Position2dType(POSITION_2D_INT_MOCK));
});

ava('Position3dType', (t) => {
    t.notThrows(() => Position3dType(POSITION_3D_MOCK));
});
