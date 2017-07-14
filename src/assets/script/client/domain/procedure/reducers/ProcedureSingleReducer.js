import { createReducer } from 'redux-create-reducer';
import {
    SAVE_PROCEDURE_START,
    SAVE_PROCEDURE_SUCCESS,
    SAVE_PROCEDURE_ERROR
} from '../actions/ProcedureActions';
import { ProcedureSingleStateType } from '../types/ProcedureType';

const INITIAL_STATE = new ProcedureSingleStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => ProcedureSingleStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [SAVE_PROCEDURE_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_PROCEDURE_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_PROCEDURE_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
