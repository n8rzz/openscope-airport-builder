import ava from 'ava';
import sinon from 'sinon';
import {
    EDIT_FIX_START,
    EDIT_FIX_SUCCESS,
    EDIT_FIX_ERROR,
    editFix
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

ava('.editFix() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await editFix(FixUpdateTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === EDIT_FIX_START);
});

ava('.editFix() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editFix(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_FIX_ERROR);
});

ava('.editFix() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editFix(FixUpdateTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_FIX_SUCCESS);
});
