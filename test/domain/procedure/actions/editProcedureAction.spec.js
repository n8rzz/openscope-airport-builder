import ava from 'ava';
import sinon from 'sinon';
import {
    EDIT_PROCEDURE_START,
    EDIT_PROCEDURE_SUCCESS,
    EDIT_PROCEDURE_ERROR,
    editProcedure
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureSingleTypeFixture } from '../_mocks/procedureMocks';

ava('.editProcedure() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await editProcedure(ProcedureSingleTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === EDIT_PROCEDURE_START);
});

ava('.editProcedure() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editProcedure(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_PROCEDURE_ERROR);
});

ava('.editProcedure() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await editProcedure(ProcedureSingleTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === EDIT_PROCEDURE_SUCCESS);
});
