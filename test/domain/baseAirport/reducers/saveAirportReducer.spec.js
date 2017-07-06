import ava from 'ava';
import {
    SAVE_BASE_AIRPORT_START,
    SAVE_BASE_AIRPORT_SUCCESS,
    SAVE_BASE_AIRPORT_ERROR
} from '../../../../src/assets/scripts/client/domain/baseAirport/actions/BaseAirportActions';
import {
    // BaseAirportType,
    BaseAirportStateType
} from '../../../../src/assets/scripts/client/domain/baseAirport/types/AirportType';
import saveAirportReducer from '../../../../src/assets/scripts/client/domain/baseAirport/reducers/BaseAirportReducer';
import { baseAirportTypeMock } from '../_mocks/baseAirportMocks';

const INITIAL_STATE = new BaseAirportStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('saveAirportReducer updates #isLoading on SAVE_BASE_AIRPORT_START action', (t) => {
    t.notThrows(() => saveAirportReducer(INITIAL_STATE, { type: SAVE_BASE_AIRPORT_START }));

    const loadingState = saveAirportReducer(INITIAL_STATE, { type: SAVE_BASE_AIRPORT_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('saveAirportReducer reducer sets payload', (t) => {
    t.notThrows(() => {
        saveAirportReducer(INITIAL_STATE, {
            type: SAVE_BASE_AIRPORT_SUCCESS,
            payload: baseAirportTypeMock
        });
    });

    const loadingState = saveAirportReducer(undefined, {
        type: SAVE_BASE_AIRPORT_SUCCESS,
        payload: baseAirportTypeMock
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveAirportReducer reducer sets error on SAVE_BASE_AIRPORT_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveAirportReducer(INITIAL_STATE, {
            type: SAVE_BASE_AIRPORT_ERROR,
            errors: networkError
        });
    });

    const errorState = saveAirportReducer(INITIAL_STATE, {
        type: SAVE_BASE_AIRPORT_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
