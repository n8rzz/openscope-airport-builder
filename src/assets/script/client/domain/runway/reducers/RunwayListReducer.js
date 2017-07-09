import { createReducer } from 'redux-create-reducer';
import {
    ADD_RUNWAY_TO_LIST_START,
    ADD_RUNWAY_TO_LIST_SUCCESS,
    ADD_RUNWAY_TO_LIST_ERROR
} from '../actions/RunwayActions';
import {
    RunwayPairListType,
    RunwayListStateType
} from '../types/RunwayType';

const INITIAL_STATE = RunwayListStateType({
    isLoading: false,
    payload: [],
    error: null
});

const mergeState = (state, updates) => RunwayListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [ADD_RUNWAY_TO_LIST_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [ADD_RUNWAY_TO_LIST_SUCCESS]: (state, { payload }) => {
        const updatedRunwaylist = RunwayPairListType.update(state.payload, { $push: [payload] });

        return mergeState(
            state,
            {
                isLoading: false,
                payload: updatedRunwaylist
            }
        )
    },

    [ADD_RUNWAY_TO_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
