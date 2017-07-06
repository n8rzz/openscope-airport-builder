import { FixUpdateType } from '../types/FixType';

export const ADD_FIX_TO_LIST_START = 'ADD_FIX_TO_LIST_START';
export const ADD_FIX_TO_LIST_SUCCESS = 'ADD_FIX_TO_LIST_SUCCESS';
export const ADD_FIX_TO_LIST_ERROR = 'ADD_FIX_TO_LIST_ERROR';

const addFixToListStart = () => ({ type: ADD_FIX_TO_LIST_START });

const addFixToListSuccess = (payload) => ({
    type: ADD_FIX_TO_LIST_SUCCESS,
    payload
});

const addFixToListError = (error) => ({
    type: ADD_FIX_TO_LIST_ERROR,
    error
});

export const addFixToList = (fixToAdd) => (dispatch, getState) => {
    dispatch(addFixToListStart());

    if (!FixUpdateType.is(fixToAdd)) {
        const error = new TypeError('Invalid data passed to .addFixToList()');

        return dispatch(addFixToListError(error));
    }

    console.log(getState());
    // mockFixList = Object.assign({}, mockFixList, {
    //     [fixFormValues.name]: fixFormValues.getPositionDisplay()
    // });

    return dispatch(addFixToListSuccess(fixToAdd));
};

export const SAVE_FIX_START = 'SAVE_FIX_START';
export const SAVE_FIX_SUCCESS = 'SAVE_FIX_SUCCESS';
export const SAVE_FIX_ERROR = 'SAVE_FIX_ERROR';

const saveFixStart = () => ({ type: SAVE_FIX_START });

const saveFixSuccess = (payload) => ({
    type: SAVE_FIX_SUCCESS,
    payload
});

const saveFixError = (error) => ({
    type: SAVE_FIX_ERROR,
    error
});

export const saveFix = (fixFormValues) => (dispatch) => {
    dispatch(saveFixStart());

    if (!fixFormValues) {
        const error = new Error('Invalid data passed to .saveFix()');

        return dispatch(saveFixError(error));
    }

    dispatch(addFixToList(fixFormValues));
    return dispatch(saveFixSuccess(fixFormValues));
};
