import ava from 'ava';
import {
    UPDATE_EXISTING_RUNWAY_START,
    UPDATE_EXISTING_RUNWAY_SUCCESS,
    UPDATE_EXISTING_RUNWAY_ERROR
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayListStateType } from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import updateExistingRunwayPair from '../../../../src/assets/script/client/domain/runway/reducers/RunwayListReducer';
import { RunwayListTypeFixture } from '../_mocks/runwayMocks';

const INITIAL_STATE = new RunwayListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('updateExistingRunwayPair updates #isLoading on UPDATE_EXISTING_RUNWAY_START action', (t) => {
    t.notThrows(() => updateExistingRunwayPair(INITIAL_STATE, { type: UPDATE_EXISTING_RUNWAY_START }));

    const loadingState = updateExistingRunwayPair(INITIAL_STATE, { type: UPDATE_EXISTING_RUNWAY_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('updateExistingRunwayPair reducer sets payload on UPDATE_EXISTING_RUNWAY_SUCCESS', (t) => {
    t.notThrows(() => {
        updateExistingRunwayPair(INITIAL_STATE, {
            type: UPDATE_EXISTING_RUNWAY_SUCCESS,
            payload: RunwayListTypeFixture
        });
    });

    const loadingState = updateExistingRunwayPair(INITIAL_STATE, {
        type: UPDATE_EXISTING_RUNWAY_SUCCESS,
        payload: RunwayListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('updateExistingRunwayPair reducer sets error on UPDATE_EXISTING_RUNWAY_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        updateExistingRunwayPair(INITIAL_STATE, {
            type: UPDATE_EXISTING_RUNWAY_ERROR,
            errors: networkError
        });
    });

    const errorState = updateExistingRunwayPair(INITIAL_STATE, {
        type: UPDATE_EXISTING_RUNWAY_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
