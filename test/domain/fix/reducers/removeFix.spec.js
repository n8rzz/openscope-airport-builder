import ava from 'ava';
import {
    REMOVE_FIX_START,
    REMOVE_FIX_SUCCESS,
    REMOVE_FIX_ERROR
} from '../../../../src/assets/scripts/client/domain/fix/actions/FixActions';
import { FixListStateType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';
import removeFix from '../../../../src/assets/scripts/client/domain/fix/reducers/FixListReducer';
import { FixListTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('removeFix updates #isLoading on REMOVE_FIX_START action', (t) => {
    t.notThrows(() => removeFix(INITIAL_STATE, { type: REMOVE_FIX_START }));

    const loadingState = removeFix(INITIAL_STATE, { type: REMOVE_FIX_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('removeFix reducer sets payload', (t) => {
    t.notThrows(() => {
        removeFix(INITIAL_STATE, {
            type: REMOVE_FIX_SUCCESS,
            payload: FixListTypeFixture
        });
    });

    const loadingState = removeFix(INITIAL_STATE, {
        type: REMOVE_FIX_SUCCESS,
        payload: FixListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('removeFix reducer sets error on REMOVE_FIX_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        removeFix(INITIAL_STATE, {
            type: REMOVE_FIX_ERROR,
            errors: networkError
        });
    });

    const errorState = removeFix(INITIAL_STATE, {
        type: REMOVE_FIX_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
