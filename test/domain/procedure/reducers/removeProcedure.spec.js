import ava from 'ava';
import {
    REMOVE_PROCEDURE_START,
    REMOVE_PROCEDURE_SUCCESS,
    REMOVE_PROCEDURE_ERROR
} from '../../../../src/assets/script/client/domain/procedure/actions/ProcedureActions';
import { ProcedureListStateType } from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';
import removeProcedure from '../../../../src/assets/script/client/domain/procedure/reducers/ProcedureListReducer';
import { ProcedureListTypeFixture } from '../_mocks/procedureMocks';

const INITIAL_STATE = new ProcedureListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('removeProcedure updates #isLoading on REMOVE_PROCEDURE_START action', (t) => {
    t.notThrows(() => removeProcedure(INITIAL_STATE, { type: REMOVE_PROCEDURE_START }));

    const loadingState = removeProcedure(INITIAL_STATE, { type: REMOVE_PROCEDURE_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('removeProcedure reducer sets payload on REMOVE_PROCEDURE_SUCCESS', (t) => {
    t.notThrows(() => {
        removeProcedure(INITIAL_STATE, {
            type: REMOVE_PROCEDURE_SUCCESS,
            payload: ProcedureListTypeFixture
        });
    });

    const loadingState = removeProcedure(INITIAL_STATE, {
        type: REMOVE_PROCEDURE_SUCCESS,
        payload: ProcedureListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('removeProcedure reducer sets error on REMOVE_PROCEDURE_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        removeProcedure(INITIAL_STATE, {
            type: REMOVE_PROCEDURE_ERROR,
            errors: networkError
        });
    });

    const errorState = removeProcedure(INITIAL_STATE, {
        type: REMOVE_PROCEDURE_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
