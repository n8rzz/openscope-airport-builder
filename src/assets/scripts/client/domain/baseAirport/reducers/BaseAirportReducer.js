import { createReducer } from 'redux-create-reducer';
import {
    SAVE_BASE_AIRPORT_START,
    SAVE_BASE_AIRPORT_SUCCESS,
    SAVE_BASE_AIRPORT_ERROR
} from '../actions/BaseAirportActions';
import { BaseAirportStateType } from '../types/AirportType';

const INITIAL_STATE = new BaseAirportStateType({
    isLoading: false,
    payload: null,
    error: null
});

const mergeState = (state, updates) => BaseAirportStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [SAVE_BASE_AIRPORT_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_BASE_AIRPORT_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_BASE_AIRPORT_ERROR]: (state, { error }) => mergeState(
        state,
        {
            isLoading: false,
            error
        }
    )
});
