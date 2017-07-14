import ava from 'ava';
import {
    SAVE_PROCEDURE_START,
    SAVE_PROCEDURE_SUCCESS,
    SAVE_PROCEDURE_ERROR
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureSingleStateType } from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import saveProcedureReducer from '../../../../src/assets/script/client/domain/procedure/reducers/ProcedureSingleReducer';
import { ProcedureSingleTypeFixture } from '../_mocks/procedureMocks';

const INITIAL_STATE = new ProcedureSingleStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('saveProcedureReducer updates #isLoading on SAVE_PROCEDURE_START action', (t) => {
    t.notThrows(() => saveProcedureReducer(INITIAL_STATE, { type: SAVE_PROCEDURE_START }));

    const loadingState = saveProcedureReducer(INITIAL_STATE, { type: SAVE_PROCEDURE_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('saveProcedureReducer reducer sets payload on SAVE_PROCEDURE_SUCCESS', (t) => {
    t.notThrows(() => {
        saveProcedureReducer(INITIAL_STATE, {
            type: SAVE_PROCEDURE_SUCCESS,
            payload: ProcedureSingleTypeFixture
        });
    });

    const loadingState = saveProcedureReducer(INITIAL_STATE, {
        type: SAVE_PROCEDURE_SUCCESS,
        payload: ProcedureSingleTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveProcedureReducer reducer sets error on SAVE_PROCEDURE_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveProcedureReducer(INITIAL_STATE, {
            type: SAVE_PROCEDURE_ERROR,
            errors: networkError
        });
    });

    const errorState = saveProcedureReducer(INITIAL_STATE, {
        type: SAVE_PROCEDURE_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
