import ava from 'ava';
import {
    UPDATE_EXISTING_FIX_START,
    UPDATE_EXISTING_FIX_SUCCESS,
    UPDATE_EXISTING_FIX_ERROR
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import { FixListStateType } from '../../../../src/assets/script/client/domain/fix/types/FixType';
import updateExistingFix from '../../../../src/assets/script/client/domain/fix/reducers/FixListReducer';
import { FixListTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixListStateType({
    isLoading: false,
    payload: [],
    error: null
});

ava('updateExistingFix updates #isLoading on UPDATE_EXISTING_FIX_START action', (t) => {
    t.notThrows(() => updateExistingFix(INITIAL_STATE, { type: UPDATE_EXISTING_FIX_START }));

    const loadingState = updateExistingFix(INITIAL_STATE, { type: UPDATE_EXISTING_FIX_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('updateExistingFix reducer sets payload on UPDATE_EXISTING_FIX_SUCCESS', (t) => {
    t.notThrows(() => {
        updateExistingFix(INITIAL_STATE, {
            type: UPDATE_EXISTING_FIX_SUCCESS,
            payload: FixListTypeFixture
        });
    });

    const loadingState = updateExistingFix(INITIAL_STATE, {
        type: UPDATE_EXISTING_FIX_SUCCESS,
        payload: FixListTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('updateExistingFix reducer sets error on UPDATE_EXISTING_FIX_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        updateExistingFix(INITIAL_STATE, {
            type: UPDATE_EXISTING_FIX_ERROR,
            errors: networkError
        });
    });

    const errorState = updateExistingFix(INITIAL_STATE, {
        type: UPDATE_EXISTING_FIX_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
