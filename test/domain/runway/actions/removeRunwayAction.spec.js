import ava from 'ava';
import sinon from 'sinon';
import {
    REMOVE_RUNWAY_PAIR_START,
    REMOVE_RUNWAY_PAIR_SUCCESS,
    REMOVE_RUNWAY_PAIR_ERROR,
    _findRunwayPairIndex,
    removeRunwayPair
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import {
    RunwayPairTypeFixture,
    RunwayPairListTypeFixture
} from '../_mocks/runwayMocks';


const getStateStub = () => ({
    runwayList: {
        payload: RunwayPairListTypeFixture
    }
});

ava('._findRunwayPairIndex() returns an index number when passed a RunwayPair that exists within the list', (t) => {
    t.notThrows(() => _findRunwayPairIndex(RunwayPairTypeFixture, RunwayPairListTypeFixture));

    const result = _findRunwayPairIndex(RunwayPairTypeFixture, RunwayPairListTypeFixture);

    t.true(result === 0);
});

ava('.removeRunwayPair() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeRunwayPair(RunwayPairTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === REMOVE_RUNWAY_PAIR_START);
});

ava('.removeRunwayPair() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeRunwayPair(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_RUNWAY_PAIR_ERROR);
});

ava('.removeRunwayPair() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeRunwayPair(RunwayPairTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_RUNWAY_PAIR_SUCCESS);
});
