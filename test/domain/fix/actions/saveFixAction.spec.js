import ava from 'ava';
import sinon from 'sinon';
import {
    SAVE_FIX_START,
    SAVE_FIX_SUCCESS,
    SAVE_FIX_ERROR,
    saveFix
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import {
    FixUpdateTypeFixture,
    FixUpdateTypeNotInListFixture,
    FixListTypeFixture
} from '../_mocks/fixMocks';

const getStateStub = () => ({
    fixList: {
        payload: FixListTypeFixture
    }
});

ava('.saveFix() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix(FixUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === SAVE_FIX_START);
});

ava('.saveFix() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_FIX_ERROR);
});

ava('.saveFix() dispatches an UPDATE_EXISTING_FIX_START action when a fix needs updating', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix(FixUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(typeof dispatchSpy.getCall(1).args[0] === 'function');
});

ava('.saveFix() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix(FixUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 3);
    t.true(dispatchSpy.getCall(2).args[0].type === SAVE_FIX_SUCCESS);
});

ava('.saveFix() dispatches a success action when passed valid data and a fix does not exist', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix(FixUpdateTypeNotInListFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 3);
    t.true(dispatchSpy.getCall(2).args[0].type === SAVE_FIX_SUCCESS);
});
