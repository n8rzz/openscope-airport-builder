import ava from 'ava';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR
} from '../../../../src/assets/scripts/client/domain/fix/actions/FixActions';
import { FixListStateType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';
import saveFixReducer from '../../../../src/assets/scripts/client/domain/fix/reducers/FixListReducer';
import { FixListTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('saveFixReducer updates #isLoading on ADD_FIX_TO_LIST_START action', (t) => {
    t.notThrows(() => saveFixReducer(INITIAL_STATE, { type: ADD_FIX_TO_LIST_START }));

    const loadingState = saveFixReducer(INITIAL_STATE, { type: ADD_FIX_TO_LIST_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('saveFixReducer reducer sets payload', (t) => {
    t.notThrows(() => {
        saveFixReducer(INITIAL_STATE, {
            type: ADD_FIX_TO_LIST_SUCCESS,
            payload: FixListTypeFixture
        });
    });

    const loadingState = saveFixReducer(INITIAL_STATE, {
        type: ADD_FIX_TO_LIST_SUCCESS,
        payload: FixListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveFixReducer reducer sets error on ADD_FIX_TO_LIST_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveFixReducer(INITIAL_STATE, {
            type: ADD_FIX_TO_LIST_ERROR,
            errors: networkError
        });
    });

    const errorState = saveFixReducer(INITIAL_STATE, {
        type: ADD_FIX_TO_LIST_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
