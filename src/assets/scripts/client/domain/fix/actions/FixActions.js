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

    // mockFixList = Object.assign({}, mockFixList, {
    //     [fixFormValues.name]: fixFormValues.getPositionDisplay()
    // });

    return dispatch(saveFixSuccess(fixFormValues));
};
