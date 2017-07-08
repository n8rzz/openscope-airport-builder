import { createReducer } from 'redux-create-reducer';
import {
    SAVE_RUNWAY_START,
    SAVE_RUNWAY_SUCCESS,
    SAVE_RUNWAY_ERROR
} from '../actions/RunwayActions';
import { RunwaySingleStateType } from '../types/RunwayType';

const INITIAL_STATE = new RunwaySingleStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => RunwaySingleStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [SAVE_RUNWAY_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_RUNWAY_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_RUNWAY_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
