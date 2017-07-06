import { createReducer } from 'redux-create-reducer';
import {
    GET_FIX_LIST_START,
    GET_FIX_LIST_SUCCESS,
    GET_FIX_LIST_ERROR
} from '../actions/FixActions';
import { FixListStateType } from '../types/FixType';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => FixListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_FIX_LIST_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [GET_FIX_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_FIX_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
