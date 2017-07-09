import ava from 'ava';
import {
    ADD_RUNWAY_TO_LIST_START,
    ADD_RUNWAY_TO_LIST_SUCCESS,
    ADD_RUNWAY_TO_LIST_ERROR
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayListStateType } from '../../../../src/assets/script/client/domain/runway/types/RunwayType';
import addRunwayToList from '../../../../src/assets/script/client/domain/runway/reducers/RunwayListReducer';
import { RunwayPairTypeFixture } from '../_mocks/runwayMocks';

const INITIAL_STATE = new RunwayListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('addRunwayToList updates #isLoading on ADD_RUNWAY_TO_LIST_START action', (t) => {
    t.notThrows(() => addRunwayToList(INITIAL_STATE, { type: ADD_RUNWAY_TO_LIST_START }));

    const loadingState = addRunwayToList(INITIAL_STATE, { type: ADD_RUNWAY_TO_LIST_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('addRunwayToList reducer sets payload', (t) => {
    t.notThrows(() => {
        addRunwayToList(INITIAL_STATE, {
            type: ADD_RUNWAY_TO_LIST_SUCCESS,
            payload: RunwayPairTypeFixture
        });
    });

    const loadingState = addRunwayToList(INITIAL_STATE, {
        type: ADD_RUNWAY_TO_LIST_SUCCESS,
        payload: RunwayPairTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('addRunwayToList reducer sets error on ADD_RUNWAY_TO_LIST_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        addRunwayToList(INITIAL_STATE, {
            type: ADD_RUNWAY_TO_LIST_ERROR,
            errors: networkError
        });
    });

    const errorState = addRunwayToList(INITIAL_STATE, {
        type: ADD_RUNWAY_TO_LIST_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
