import { createReducer } from 'redux-create-reducer';
import {
    SAVE_FIX_START,
    SAVE_FIX_SUCCESS,
    SAVE_FIX_ERROR
} from '../actions/FixActions';
import { FixStateType } from '../types/FixType';

const INITIAL_STATE = new FixStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => FixStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [SAVE_FIX_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_FIX_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_FIX_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
