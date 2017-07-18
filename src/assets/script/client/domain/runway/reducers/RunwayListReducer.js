import { createReducer } from 'redux-create-reducer';
import {
    ADD_RUNWAY_TO_LIST_START,
    ADD_RUNWAY_TO_LIST_SUCCESS,
    ADD_RUNWAY_TO_LIST_ERROR,
    UPDATE_EXISTING_RUNWAY_START,
    UPDATE_EXISTING_RUNWAY_SUCCESS,
    UPDATE_EXISTING_RUNWAY_ERROR,
    REMOVE_RUNWAY_PAIR_START,
    REMOVE_RUNWAY_PAIR_SUCCESS,
    REMOVE_RUNWAY_PAIR_ERROR
} from '../actions/RunwayActions';
import { RunwayListStateType } from '../types/RunwayType';
import { RunwayPairListTypeFixture } from '../../../../../../../test/domain/runway/_mocks/runwayMocks';

const INITIAL_STATE = RunwayListStateType({
    isLoading: false,
    payload: RunwayPairListTypeFixture,
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

    [ADD_RUNWAY_TO_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [ADD_RUNWAY_TO_LIST_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    ),

    [UPDATE_EXISTING_RUNWAY_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [UPDATE_EXISTING_RUNWAY_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [UPDATE_EXISTING_RUNWAY_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    ),

    [REMOVE_RUNWAY_PAIR_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [REMOVE_RUNWAY_PAIR_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [REMOVE_RUNWAY_PAIR_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
