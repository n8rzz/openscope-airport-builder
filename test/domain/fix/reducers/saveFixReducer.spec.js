import ava from 'ava';
import {
    SAVE_FIX_START,
    SAVE_FIX_SUCCESS,
    SAVE_FIX_ERROR
} from '../../../../src/assets/scripts/client/domain/fix/actions/FixActions';
import { FixStateType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';
import saveFixReducer from '../../../../src/assets/scripts/client/domain/fix/reducers/FixSingleReducer';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('saveFixReducer updates #isLoading on SAVE_FIX_START action', (t) => {
    t.notThrows(() => saveFixReducer(INITIAL_STATE, { type: SAVE_FIX_START }));

    const loadingState = saveFixReducer(INITIAL_STATE, { type: SAVE_FIX_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('saveFixReducer reducer sets payload', (t) => {
    t.notThrows(() => {
        saveFixReducer(INITIAL_STATE, {
            type: SAVE_FIX_SUCCESS,
            payload: FixUpdateTypeFixture
        });
    });

    const loadingState = saveFixReducer(INITIAL_STATE, {
        type: SAVE_FIX_SUCCESS,
        payload: FixUpdateTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveFixReducer reducer sets error on SAVE_FIX_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveFixReducer(INITIAL_STATE, {
            type: SAVE_FIX_ERROR,
            errors: networkError
        });
    });

    const errorState = saveFixReducer(INITIAL_STATE, {
        type: SAVE_FIX_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
