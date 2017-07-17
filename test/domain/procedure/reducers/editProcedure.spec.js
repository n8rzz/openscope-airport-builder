import ava from 'ava';
import {
    EDIT_PROCEDURE_START,
    EDIT_PROCEDURE_SUCCESS,
    EDIT_PROCEDURE_ERROR
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureSingleStateType } from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import editProcedureReducer from '../../../../src/assets/script/client/domain/procedure/reducers/ProcedureSingleReducer';
import { ProcedureSingleTypeFixture } from '../_mocks/procedureMocks';

const INITIAL_STATE = new ProcedureSingleStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('editProcedureReducer updates #isLoading on EDIT_PROCEDURE_START action', (t) => {
    t.notThrows(() => editProcedureReducer(INITIAL_STATE, { type: EDIT_PROCEDURE_START }));

    const loadingState = editProcedureReducer(INITIAL_STATE, { type: EDIT_PROCEDURE_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('editProcedureReducer reducer sets payload on EDIT_PROCEDURE_SUCCESS', (t) => {
    t.notThrows(() => {
        editProcedureReducer(INITIAL_STATE, {
            type: EDIT_PROCEDURE_SUCCESS,
            payload: ProcedureSingleTypeFixture
        });
    });

    const loadingState = editProcedureReducer(INITIAL_STATE, {
        type: EDIT_PROCEDURE_SUCCESS,
        payload: ProcedureSingleTypeFixture
    });

    t.false(loadingState.isLoading);
    t.deepEqual(loadingState.payload, ProcedureSingleTypeFixture);
    t.is(loadingState.error, null);
});

ava('editProcedureReducer reducer sets error on EDIT_PROCEDURE_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        editProcedureReducer(INITIAL_STATE, {
            type: EDIT_PROCEDURE_ERROR,
            errors: networkError
        });
    });

    const errorState = editProcedureReducer(INITIAL_STATE, {
        type: EDIT_PROCEDURE_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
