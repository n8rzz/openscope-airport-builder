import _findIndex from 'lodash/findIndex';
import { ProcedureSingleType } from '../types/ProcedureType';

export const ADD_PROCEDURE_TO_LIST_START = 'ADD_PROCEDURE_TO_LIST_START';
export const ADD_PROCEDURE_TO_LIST_SUCCESS = 'ADD_PROCEDURE_TO_LIST_SUCCESS';
export const ADD_PROCEDURE_TO_LIST_ERROR = 'ADD_PROCEDURE_TO_LIST_ERROR';

const addProcedureToListStart = () => ({ type: ADD_PROCEDURE_TO_LIST_START });

const addProcedureToListSuccess = (payload) => ({
    type: ADD_PROCEDURE_TO_LIST_SUCCESS,
    payload
});

const addProcedureToListError = (error) => ({
    type: ADD_PROCEDURE_TO_LIST_ERROR,
    error
});

export const addProcedureToList = (procedureSingle) => (dispatch, getState) => {
    dispatch(addProcedureToListStart());

    if (!ProcedureSingleType.is(procedureSingle)) {
        const error = new TypeError('Invalid data passed to .addProcedureToList()');

        return dispatch(addProcedureToListError(error));
    }
    const { procedureList } = getState();

    const procedureIndex = _findIndex(procedureList.payload, { icao: procedureSingle.icao.toUpperCase() });

    // TODO: move to editList action
    if (procedureIndex !== -1) {
        // return;
        // const existingProcedure = procedureList.payload[procedureIndex];
        // procedureSingle = ProcedureSingleType.update(existingProcedure, { $merge: procedureSingle });
    }

    return dispatch(addProcedureToListSuccess(procedureSingle));
};

export const SAVE_PROCEDURE_START = 'SAVE_PROCEDURE_START';
export const SAVE_PROCEDURE_SUCCESS = 'SAVE_PROCEDURE_SUCCESS';
export const SAVE_PROCEDURE_ERROR = 'SAVE_PROCEDURE_ERROR';

const saveProcedureStart = () => ({ type: SAVE_PROCEDURE_START });

const saveProcedureSuccess = (payload) => ({
    type: SAVE_PROCEDURE_SUCCESS,
    payload
});

const saveProcedureError = (error) => ({
    type: SAVE_PROCEDURE_ERROR,
    error
});

export const saveProcedure = (procedureSingleValues) => (dispatch) => {
    dispatch(saveProcedureStart());

    if (!ProcedureSingleType.is(procedureSingleValues)) {
        const error = new TypeError('Invalid data passed to .saveProcedure()');

        return dispatch(saveProcedureError(error));
    }

    dispatch(addProcedureToList(procedureSingleValues));
    return dispatch(saveProcedureSuccess(null));
};

export const EDIT_PROCEDURE_START = 'EDIT_PROCEDURE_START';
export const EDIT_PROCEDURE_SUCCESS = 'EDIT_PROCEDURE_SUCCESS';
export const EDIT_PROCEDURE_ERROR = 'EDIT_PROCEDURE_ERROR';

export const editProcedureStart = () => ({ type: EDIT_PROCEDURE_START });

export const editProcedureSuccess = (payload) => ({
    type: EDIT_PROCEDURE_SUCCESS,
    payload
});

export const editProcedureError = (error) => ({
    type: EDIT_PROCEDURE_ERROR,
    error
});

export const editProcedure = (procedureModel) => (dispatch) => {
    dispatch(editProcedureStart());

    if (!ProcedureSingleType.is(procedureModel)) {
        const error = new TypeError('Invalid data passed to .editProcedure(). Expected a ProcedureSingleType.');

        return dispatch(editProcedureError(error));
    }

    return dispatch(editProcedureSuccess(procedureModel));
};
