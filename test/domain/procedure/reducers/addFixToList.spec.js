import ava from 'ava';
import {
    ADD_PROCEDURE_TO_LIST_START,
    ADD_PROCEDURE_TO_LIST_SUCCESS,
    ADD_PROCEDURE_TO_LIST_ERROR
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureListStateType } from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import addProcedureToList from '../../../../src/assets/script/client/domain/procedure/reducers/ProcedureListReducer';
import { ProcedureListTypeFixture } from '../_mocks/procedureMocks';

const INITIAL_STATE = new ProcedureListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('addProcedureToList updates #isLoading on ADD_PROCEDURE_TO_LIST_START action', (t) => {
    t.notThrows(() => addProcedureToList(INITIAL_STATE, { type: ADD_PROCEDURE_TO_LIST_START }));

    const loadingState = addProcedureToList(INITIAL_STATE, { type: ADD_PROCEDURE_TO_LIST_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('addProcedureToList reducer sets payload', (t) => {
    t.notThrows(() => {
        addProcedureToList(INITIAL_STATE, {
            type: ADD_PROCEDURE_TO_LIST_SUCCESS,
            payload: ProcedureListTypeFixture
        });
    });

    const loadingState = addProcedureToList(INITIAL_STATE, {
        type: ADD_PROCEDURE_TO_LIST_SUCCESS,
        payload: ProcedureListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('addProcedureToList reducer sets error on ADD_PROCEDURE_TO_LIST_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        addProcedureToList(INITIAL_STATE, {
            type: ADD_PROCEDURE_TO_LIST_ERROR,
            errors: networkError
        });
    });

    const errorState = addProcedureToList(INITIAL_STATE, {
        type: ADD_PROCEDURE_TO_LIST_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
