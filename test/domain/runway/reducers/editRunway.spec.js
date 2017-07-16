import ava from 'ava';
import {
    EDIT_RUNWAY_START,
    EDIT_RUNWAY_SUCCESS,
    EDIT_RUNWAY_ERROR
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayPairStateType } from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import editRunwayReducer from '../../../../src/assets/script/client/domain/runway/reducers/RunwaySingleReducer';
import { RunwayPairTypeFixture } from '../_mocks/runwayMocks';

const INITIAL_STATE = new RunwayPairStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('editRunwayReducer updates #isLoading on EDIT_RUNWAY_START action', (t) => {
    t.notThrows(() => editRunwayReducer(INITIAL_STATE, { type: EDIT_RUNWAY_START }));

    const loadingState = editRunwayReducer(INITIAL_STATE, { type: EDIT_RUNWAY_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.payload === null);
    t.true(loadingState.error === null);
});

ava('editRunwayReducer reducer sets payload on EDIT_RUNWAY_SUCCESS', (t) => {
    t.notThrows(() => {
        editRunwayReducer(INITIAL_STATE, {
            type: EDIT_RUNWAY_SUCCESS,
            payload: RunwayPairTypeFixture
        });
    });

    const loadingState = editRunwayReducer(INITIAL_STATE, {
        type: EDIT_RUNWAY_SUCCESS,
        payload: RunwayPairTypeFixture
    });

    t.false(loadingState.isLoading);
    t.deepEqual(loadingState.payload, RunwayPairTypeFixture);
    t.is(loadingState.error, null);
});

ava('editRunwayReducer reducer sets error on EDIT_RUNWAY_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        editRunwayReducer(INITIAL_STATE, {
            type: EDIT_RUNWAY_ERROR,
            errors: networkError
        });
    });

    const errorState = editRunwayReducer(INITIAL_STATE, {
        type: EDIT_RUNWAY_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
