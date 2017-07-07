import { createReducer } from 'redux-create-reducer';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR
} from '../actions/FixActions';
import {
    FixListType,
    FixListStateType
} from '../types/FixType';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: [],
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

    [ADD_FIX_TO_LIST_SUCCESS]: (state, { payload }) => {
        const updatedFixList = FixListType.update(state.payload, { $push: [payload] });

        return mergeState(
            state,
            {
                isLoading: false,
                payload: updatedFixList
            }
        )
    },

    [ADD_FIX_TO_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
