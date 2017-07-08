
export const SAVE_BASE_AIRPORT_START = 'SAVE_BASE_AIRPORT_START';
export const SAVE_BASE_AIRPORT_SUCCESS = 'SAVE_BASE_AIRPORT_SUCCESS';
export const SAVE_BASE_AIRPORT_ERROR = 'SAVE_BASE_AIRPORT_ERROR';

const saveBaseAirportStart = () => ({
    type: SAVE_BASE_AIRPORT_START
});

const saveBaseAirportSuccess = (payload) => ({
    type: SAVE_BASE_AIRPORT_SUCCESS,
    payload
});

const saveBaseAirportError = (error) => ({
    type: SAVE_BASE_AIRPORT_ERROR,
    error
});

export const saveBaseAirport = (baseAirportFormValues) => (dispatch) => {
    dispatch(saveBaseAirportStart());

    if (!baseAirportFormValues) {
        const error = new TypeError('Invalid data passed to .saveBaseAirport()');

        return dispatch(saveBaseAirportError(error));
    }

    return dispatch(saveBaseAirportSuccess(baseAirportFormValues));
};
