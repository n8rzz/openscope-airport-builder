import ava from 'ava';
import {
    REMOVE_RUNWAY_PAIR_START,
    REMOVE_RUNWAY_PAIR_SUCCESS,
    REMOVE_RUNWAY_PAIR_ERROR
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayListStateType } from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import removeRunwayPair from '../../../../src/assets/script/client/domain/runway/reducers/RunwayListReducer';
import { RunwayPairListTypeFixture } from '../_mocks/runwayMocks';

const INITIAL_STATE = new RunwayListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('removeRunwayPair updates #isLoading on REMOVE_RUNWAY_PAIR_START action', (t) => {
    t.notThrows(() => removeRunwayPair(INITIAL_STATE, { type: REMOVE_RUNWAY_PAIR_START }));

    const loadingState = removeRunwayPair(INITIAL_STATE, { type: REMOVE_RUNWAY_PAIR_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('removeRunwayPair reducer sets payload', (t) => {
    t.notThrows(() => {
        removeRunwayPair(INITIAL_STATE, {
            type: REMOVE_RUNWAY_PAIR_SUCCESS,
            payload: RunwayPairListTypeFixture
        });
    });

    const loadingState = removeRunwayPair(INITIAL_STATE, {
        type: REMOVE_RUNWAY_PAIR_SUCCESS,
        payload: RunwayPairListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('removeRunwayPair reducer sets error on REMOVE_RUNWAY_PAIR_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        removeRunwayPair(INITIAL_STATE, {
            type: REMOVE_RUNWAY_PAIR_ERROR,
            errors: networkError
        });
    });

    const errorState = removeRunwayPair(INITIAL_STATE, {
        type: REMOVE_RUNWAY_PAIR_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
