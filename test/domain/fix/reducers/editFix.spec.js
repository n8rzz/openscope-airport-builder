import ava from 'ava';
import {
    EDIT_FIX_START,
    EDIT_FIX_SUCCESS,
    EDIT_FIX_ERROR
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import { FixStateType } from '../../../../src/assets/script/client/domain/fix/types/FixType';
import editFixReducer from '../../../../src/assets/script/client/domain/fix/reducers/FixSingleReducer';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

const INITIAL_STATE = new FixStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('editFixReducer updates #isLoading on EDIT_FIX_START action', (t) => {
    t.notThrows(() => editFixReducer(INITIAL_STATE, { type: EDIT_FIX_START }));

    const loadingState = editFixReducer(INITIAL_STATE, { type: EDIT_FIX_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('editFixReducer reducer sets payload on EDIT_FIX_SUCCESS', (t) => {
    t.notThrows(() => {
        editFixReducer(INITIAL_STATE, {
            type: EDIT_FIX_SUCCESS,
            payload: FixUpdateTypeFixture
        });
    });

    const loadingState = editFixReducer(INITIAL_STATE, {
        type: EDIT_FIX_SUCCESS,
        payload: FixUpdateTypeFixture
    });

    t.false(loadingState.isLoading);
    t.deepEqual(loadingState.payload, FixUpdateTypeFixture);
    t.is(loadingState.error, null);
});

ava('editFixReducer reducer sets error on EDIT_FIX_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        editFixReducer(INITIAL_STATE, {
            type: EDIT_FIX_ERROR,
            errors: networkError
        });
    });

    const errorState = editFixReducer(INITIAL_STATE, {
        type: EDIT_FIX_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
