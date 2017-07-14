import ava from 'ava';
import sinon from 'sinon';
import {
    SAVE_PROCEDURE_START,
    SAVE_PROCEDURE_SUCCESS,
    SAVE_PROCEDURE_ERROR,
    saveProcedure
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureSingleTypeFixture } from '../_mocks/procedureMocks';

ava('.saveProcedure() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveProcedure(ProcedureSingleTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === SAVE_PROCEDURE_START);
});

ava('.saveProcedure() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveProcedure(false)(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_PROCEDURE_ERROR);
});

ava('.saveProcedure() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveProcedure(ProcedureSingleTypeFixture)(dispatchSpy);

    t.true(dispatchSpy.callCount === 3);
    t.true(dispatchSpy.getCall(2).args[0].type === SAVE_PROCEDURE_SUCCESS);
});
