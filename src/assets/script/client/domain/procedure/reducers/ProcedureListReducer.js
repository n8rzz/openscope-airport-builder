import { createReducer } from 'redux-create-reducer';
import {
    ADD_PROCEDURE_TO_LIST_START,
    ADD_PROCEDURE_TO_LIST_SUCCESS,
    ADD_PROCEDURE_TO_LIST_ERROR
} from '../actions/ProcedureActions';
import { ProcedureListType, ProcedureListStateType } from '../types/ProcedureType';

const INITIAL_STATE = new ProcedureListStateType({
    isLoading: false,
    payload: [],
    error: null
});

const mergeState = (state, updates) => ProcedureListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [ADD_PROCEDURE_TO_LIST_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [ADD_PROCEDURE_TO_LIST_SUCCESS]: (state, { payload }) => {
        const updatedProcedureList = ProcedureListType.update(state.payload, { $push: [payload] });

        return mergeState(
            state,
            {
                isLoading: false,
                payload: updatedProcedureList
            }
        );
    },

    [ADD_PROCEDURE_TO_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
