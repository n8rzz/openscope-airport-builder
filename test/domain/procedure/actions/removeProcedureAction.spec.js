import ava from 'ava';
import sinon from 'sinon';
import {
    REMOVE_PROCEDURE_START,
    REMOVE_PROCEDURE_SUCCESS,
    REMOVE_PROCEDURE_ERROR,
    removeProcedure
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import {
    ProcedureSingleTypeFixture,
    InvalidProcedureSingleTypeFixture
} from '../_mocks/procedureMocks';

const getStateStub = () => ({
    procedureList: {
        payload: [
            ProcedureSingleTypeFixture
        ]
    }
});

ava('.removeProcedure() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeProcedure('GRNPA')(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === REMOVE_PROCEDURE_START);
});

ava('.removeProcedure() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeProcedure(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_PROCEDURE_ERROR);
});

ava('.removeProcedure() dispatches an error action when a procedure is not found', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeProcedure(InvalidProcedureSingleTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_PROCEDURE_ERROR);
});

ava('.removeProcedure() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeProcedure(ProcedureSingleTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_PROCEDURE_SUCCESS);
});
