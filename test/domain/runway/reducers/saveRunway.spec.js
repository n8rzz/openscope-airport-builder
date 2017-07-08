import ava from 'ava';
import {
    SAVE_RUNWAY_START,
    SAVE_RUNWAY_SUCCESS,
    SAVE_RUNWAY_ERROR
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwaySingleStateType } from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import saveRunwayReducer from '../../../../src/assets/script/client/domain/runway/reducers/RunwaySingleReducer';
import { RunwayUpdateTypeFixture } from '../_mocks/runwayMocks';

const INITIAL_STATE = new RunwaySingleStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('saveRunwayReducer updates #isLoading on SAVE_RUNWAY_START action', (t) => {
    t.notThrows(() => saveRunwayReducer(INITIAL_STATE, { type: SAVE_RUNWAY_START }));

    const loadingState = saveRunwayReducer(INITIAL_STATE, { type: SAVE_RUNWAY_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.payload === null);
    t.true(loadingState.error === null);
});

ava('saveRunwayReducer reducer sets payload', (t) => {
    t.notThrows(() => {
        saveRunwayReducer(INITIAL_STATE, {
            type: SAVE_RUNWAY_SUCCESS,
            payload: RunwayUpdateTypeFixture
        });
    });

    const loadingState = saveRunwayReducer(INITIAL_STATE, {
        type: SAVE_RUNWAY_SUCCESS,
        payload: RunwayUpdateTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveRunwayReducer reducer sets error on SAVE_RUNWAY_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveRunwayReducer(INITIAL_STATE, {
            type: SAVE_RUNWAY_ERROR,
            errors: networkError
        });
    });

    const errorState = saveRunwayReducer(INITIAL_STATE, {
        type: SAVE_RUNWAY_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
