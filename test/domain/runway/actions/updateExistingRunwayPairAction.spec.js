import ava from 'ava';
import sinon from 'sinon';
import {
    UPDATE_EXISTING_RUNWAY_START,
    UPDATE_EXISTING_RUNWAY_SUCCESS,
    UPDATE_EXISTING_RUNWAY_ERROR,
    updateExistingRunwayPair
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayPairTypeFixture } from '../_mocks/runwayMocks';

const getStateStub = () => ({
    runwayList: {
        payload: [RunwayPairTypeFixture]
    }
});

ava('.updateExistingRunwayPair() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingRunwayPair({})(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === UPDATE_EXISTING_RUNWAY_START);
});

ava('.updateExistingRunwayPair() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingRunwayPair(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_RUNWAY_ERROR);
});

ava('.updateExistingRunwayPair() dispatches an error action when #runwayList is empty', async (t) => {
    const getEmptyStateStub = () => ({
        runwayList: {
            payload: []
        }
    });
    const dispatchSpy = sinon.spy();

    await updateExistingRunwayPair(RunwayPairTypeFixture)(dispatchSpy, getEmptyStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_RUNWAY_ERROR);
});

ava('.updateExistingRunwayPair() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingRunwayPair(RunwayPairTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_RUNWAY_SUCCESS);
});
