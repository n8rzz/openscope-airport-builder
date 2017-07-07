import ava from 'ava';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR
} from '../../../../src/assets/scripts/client/domain/fix/actions/FixActions';
import { FixListStateType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';
import addFixToList from '../../../../src/assets/scripts/client/domain/fix/reducers/FixListReducer';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('addFixToList updates #isLoading on ADD_FIX_TO_LIST_START action', (t) => {
    t.notThrows(() => addFixToList(INITIAL_STATE, { type: ADD_FIX_TO_LIST_START }));

    const loadingState = addFixToList(INITIAL_STATE, { type: ADD_FIX_TO_LIST_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('addFixToList reducer sets payload', (t) => {
    t.notThrows(() => {
        addFixToList(INITIAL_STATE, {
            type: ADD_FIX_TO_LIST_SUCCESS,
            payload: FixUpdateTypeFixture
        });
    });

    const loadingState = addFixToList(INITIAL_STATE, {
        type: ADD_FIX_TO_LIST_SUCCESS,
        payload: FixUpdateTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('addFixToList reducer sets error on ADD_FIX_TO_LIST_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        addFixToList(INITIAL_STATE, {
            type: ADD_FIX_TO_LIST_ERROR,
            errors: networkError
        });
    });

    const errorState = addFixToList(INITIAL_STATE, {
        type: ADD_FIX_TO_LIST_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
