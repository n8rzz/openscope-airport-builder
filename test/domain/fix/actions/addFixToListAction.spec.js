import ava from 'ava';
import sinon from 'sinon';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR,
    addFixToList
} from '../../../../src/assets/scripts/client/domain/fix/actions/FixActions';
import { FixCreationTypeFixture } from '../_mocks/fixMocks';

ava('.addFixToList() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList({})(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === ADD_FIX_TO_LIST_START);
});

ava('.addFixToList() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_FIX_TO_LIST_ERROR);
});

ava('.addFixToList() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList(FixCreationTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_FIX_TO_LIST_SUCCESS);
});
