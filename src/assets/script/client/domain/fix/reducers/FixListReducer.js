import { createReducer } from 'redux-create-reducer';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR,
    REMOVE_FIX_START,
    REMOVE_FIX_SUCCESS,
    REMOVE_FIX_ERROR
} from '../actions/FixActions';
import { FixListStateType } from '../types/FixType';
import { FixListTypeFixture } from '../../../../../../../test/domain/fix/_mocks/fixMocks';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: FixListTypeFixture,
    error: null
});

const mergeState = (state, updates) => FixListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [ADD_FIX_TO_LIST_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [ADD_FIX_TO_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [ADD_FIX_TO_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    ),

    [REMOVE_FIX_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [REMOVE_FIX_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [REMOVE_FIX_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
