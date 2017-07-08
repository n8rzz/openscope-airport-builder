import {
    RunwayUpdateType
} from '../types/RunwayType';

export const SAVE_RUNWAY_START = 'SAVE_RUNWAY_START';
export const SAVE_RUNWAY_SUCCESS = 'SAVE_RUNWAY_SUCCESS';
export const SAVE_RUNWAY_ERROR = 'SAVE_RUNWAY_ERROR';

const saveRunwayStart = () => ({ type: SAVE_RUNWAY_START });

const saveRunwaySuccess = (payload) => ({
    type: SAVE_RUNWAY_SUCCESS,
    payload
});

const saveRunwayError = (error) => ({
    type: SAVE_RUNWAY_ERROR,
    error
});

export const saveRunway = (runwayFormValues) => (dispatch) => {
    dispatch(saveRunwayStart());

    if (!RunwayUpdateType.is(runwayFormValues)) {
        const error = new TypeError('Invalid values supplied to .saveRunway()');

        return dispatch(saveRunwayError(error));
    }

    return dispatch(saveRunwaySuccess(runwayFormValues));
};
