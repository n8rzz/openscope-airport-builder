import ava from 'ava';
import sinon from 'sinon';
import {
    SAVE_RUNWAY_START,
    SAVE_RUNWAY_SUCCESS,
    SAVE_RUNWAY_ERROR,
    saveRunway
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import {
    RunwayUpdateTypeFixture
} from '../_mocks/runwayMocks';

ava('.saveRunway() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveRunway({})(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === SAVE_RUNWAY_START);
});

ava('.saveRunway() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveRunway(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_RUNWAY_ERROR);
});

ava('.saveRunway() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveRunway(RunwayUpdateTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_RUNWAY_SUCCESS);
});
