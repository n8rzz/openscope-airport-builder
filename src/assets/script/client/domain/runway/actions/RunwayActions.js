import _filter from 'lodash/filter';
import _findIndex from 'lodash/findIndex';
import {
    RunwayPairType,
    RunwayPairListType
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

    const updatedRunwaylist = RunwayPairListType.update(runwayList.payload, { $push: [runwayToAdd] });

    return dispatch(addRunwayToListSuccess(updatedRunwaylist));
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


export const REMOVE_RUNWAY_PAIR_START = 'REMOVE_RUNWAY_PAIR_START';
export const REMOVE_RUNWAY_PAIR_SUCCESS = 'REMOVE_RUNWAY_PAIR_SUCCESS';
export const REMOVE_RUNWAY_PAIR_ERROR = 'REMOVE_RUNWAY_PAIR_ERROR';

const removeRunwayPairStart = () => ({ type: REMOVE_RUNWAY_PAIR_START });

const removeRunwayPairSuccess = (payload) => ({
    type: REMOVE_RUNWAY_PAIR_SUCCESS,
    payload
});

const removeRunwayPairError = (error) => ({
    type: REMOVE_RUNWAY_PAIR_ERROR,
    error
});

// exporting only so it can be tested
export const _findRunwayPairIndex = (runwayPair, runwayList) => {
    let runwayPairIndex = -1;

    for (let i = 0; i < runwayList.length; i++) {
        const comparisionRunwayPair = runwayList[i];

        if (
            comparisionRunwayPair.runwayLeft.name === runwayPair.runwayLeft.name &&
            comparisionRunwayPair.runwayRight.name === runwayPair.runwayRight.name
        ) {
            runwayPairIndex = i;

            break;
        }
    }

    return runwayPairIndex;
};

export const removeRunwayPair = (runwayPairToRemove) => (dispatch, getState) => {
    dispatch(removeRunwayPairStart());

    if (!RunwayPairType.is(runwayPairToRemove)) {
        const error = new TypeError('Invalid data passed to .removeRunwayPair(). Expected a RunwayPairType');

        return dispatch(removeRunwayPairError(error));
    }

    const { runwayList } = getState();
    const existingRunwayPairIndex = _findRunwayPairIndex(runwayPairToRemove, runwayList.payload);

    if (existingRunwayPairIndex === -1) {
        const error = new Error(`Could not find runwayPair ${runwayPairToRemove}. No runwayPair was removed.`);

        return dispatch(removeRunwayPairError(error));
    }

    const updatedRunwayPairList = _filter(
        runwayList.payload,
        (runwayPair) => runwayPair.runwayLeft.name !== runwayPairToRemove.runwayLeft.name
    );

    return dispatch(removeRunwayPairSuccess(updatedRunwayPairList));
};


export const EDIT_RUNWAY_START = 'EDIT_RUNWAY_START';
export const EDIT_RUNWAY_SUCCESS = 'EDIT_RUNWAY_SUCCESS';
export const EDIT_RUNWAY_ERROR = 'EDIT_RUNWAY_ERROR';

export const editRunwayPairStart = () => ({ type: EDIT_RUNWAY_START });

export const editRunwayPairSuccess = (payload) => ({
    type: EDIT_RUNWAY_SUCCESS,
    payload
});

export const editRunwayPairError = (error) => ({
    type: EDIT_RUNWAY_ERROR,
    error
});

export const editRunwayPair = (runwayPairModel) => (dispatch) => {
    dispatch(editRunwayPairStart());

    if (!RunwayPairType.is(runwayPairModel)) {
        const error = new TypeError('Invalid data passed to .editRunwayPair(). Expected a RunwayPairType');

        return dispatch(editRunwayPairError(error));
    }

    return dispatch(editRunwayPairSuccess(runwayPairModel));
};
