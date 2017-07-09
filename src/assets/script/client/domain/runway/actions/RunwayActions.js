import _findIndex from 'lodash/findIndex';
import {
    RunwayPairType
} from '../types/RunwayType';

export const ADD_RUNWAY_TO_LIST_START = 'ADD_RUNWAY_TO_LIST_START';
export const ADD_RUNWAY_TO_LIST_SUCCESS = 'ADD_RUNWAY_TO_LIST_SUCCESS';
export const ADD_RUNWAY_TO_LIST_ERROR = 'ADD_RUNWAY_TO_LIST_ERROR';

const addRunwayToListStart = () => ({ type: ADD_RUNWAY_TO_LIST_START });

const addRunwayToListSuccess = (payload) => ({
    type: ADD_RUNWAY_TO_LIST_SUCCESS,
    payload
});

const addRunwayToListError = (error) => ({
    type: ADD_RUNWAY_TO_LIST_ERROR,
    error
});

export const addRunwayToList = (runwayToAdd) => (dispatch, getState) => {
    dispatch(addRunwayToListStart());

    if (!RunwayPairType.is(runwayToAdd)) {
        const error = new TypeError('Invalid data sent to .addRunwayToList()');

        return dispatch(addRunwayToListError(error));
    }

    const { runwayList } = getState();
    const existingFixIndex = _findIndex(runwayList.payload, { name: runwayToAdd.name });

    if (existingFixIndex !== -1) {
        const error = new Error(`${runwayToAdd.name} already exists, skipping import.`);

        return dispatch(addRunwayToListError(error));
    }

    return dispatch(addRunwayToListSuccess(runwayToAdd));
};

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

    if (!RunwayPairType.is(runwayFormValues)) {
        const error = new TypeError('Invalid values supplied to .saveRunway()');

        return dispatch(saveRunwayError(error));
    }

    dispatch(addRunwayToList(runwayFormValues));
    return dispatch(saveRunwaySuccess(runwayFormValues));
};
