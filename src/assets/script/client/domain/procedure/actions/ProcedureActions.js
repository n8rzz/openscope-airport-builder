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

export const addProcedureToList = (procedureSingle) => (dispatch) => {
    dispatch(addProcedureToListStart());

    if (!ProcedureSingleType.is(procedureSingle)) {
        const error = new TypeError('Invalid data passed to .addProcedureToList()');

        return dispatch(addProcedureToListError(error));
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

export const saveProcedure = (procedureFormValues) => (dispatch) => {
    dispatch(saveProcedureStart());

    if (!ProcedureSingleType.is(procedureFormValues)) {
        const error = new TypeError('Invalid data passed to .saveProcedure()');

        return dispatch(saveProcedureError(error));
    }

    dispatch(addProcedureToList(procedureFormValues));
    return dispatch(saveProcedureSuccess({}));
};
