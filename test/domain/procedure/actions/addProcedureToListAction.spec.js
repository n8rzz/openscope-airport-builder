import ava from 'ava';
import sinon from 'sinon';
import {
    ADD_PROCEDURE_TO_LIST_START,
    ADD_PROCEDURE_TO_LIST_SUCCESS,
    ADD_PROCEDURE_TO_LIST_ERROR,
    addProcedureToList
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureSingleTypeFixture } from '../_mocks/procedureMocks';

const getStateStub = () => ({
    procedureList: {
        payload: [
            ProcedureSingleTypeFixture
        ]
    }
});

ava('.addProcedureToList() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await addProcedureToList({})(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === ADD_PROCEDURE_TO_LIST_START);
});

ava('.addProcedureToList() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addProcedureToList(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_PROCEDURE_TO_LIST_ERROR);
});

ava('.addProcedureToList() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    // TODO once edit is implemented, this fixture may need to change
    await addProcedureToList(ProcedureSingleTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_PROCEDURE_TO_LIST_SUCCESS);
});
