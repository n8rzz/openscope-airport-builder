import ava from 'ava';
import sinon from 'sinon';
import {
    EDIT_RUNWAY_START,
    EDIT_RUNWAY_SUCCESS,
    EDIT_RUNWAY_ERROR,
    editRunwayPair
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayPairTypeFixture } from '../_mocks/runwayMocks';

ava('.editRunwayPair() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await editRunwayPair(RunwayPairTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === EDIT_RUNWAY_START);
});

ava('.editRunwayPair() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editRunwayPair(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_RUNWAY_ERROR);
});

ava('.editRunwayPair() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editRunwayPair(RunwayPairTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_RUNWAY_SUCCESS);
});
