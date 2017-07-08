import ava from 'ava';
import sinon from 'sinon';
import {
    SAVE_FIX_START,
    SAVE_FIX_SUCCESS,
    SAVE_FIX_ERROR,
    saveFix
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';

ava('.saveFix() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix({})(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === SAVE_FIX_START);
});

ava('.saveFix() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix()(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_FIX_ERROR);
});

ava.todo('.saveFix() calls BaseAirportRepository.saveFix()');

ava('.saveFix() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveFix({})(dispatchSpy);

    t.true(dispatchSpy.callCount === 3);
    t.true(dispatchSpy.getCall(2).args[0].type === SAVE_FIX_SUCCESS);
});
