import { createReducer } from 'redux-create-reducer';
import {
    SAVE_RUNWAY_START,
    SAVE_RUNWAY_SUCCESS,
    SAVE_RUNWAY_ERROR,
    EDIT_RUNWAY_START,
    EDIT_RUNWAY_SUCCESS,
    EDIT_RUNWAY_ERROR
} from '../actions/RunwayActions';
import { RunwayPairStateType } from '../types/RunwayType';

const INITIAL_STATE = new RunwayPairStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => RunwayPairStateType.update(state, { $merge: updates });

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
    ),

    [EDIT_RUNWAY_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [EDIT_RUNWAY_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [EDIT_RUNWAY_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
