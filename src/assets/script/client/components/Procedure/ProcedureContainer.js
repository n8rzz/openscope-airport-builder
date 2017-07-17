import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    saveProcedure,
    editProcedure,
    removeProcedure
} from '../../domain/procedure/actions/ProcedureActions';
import ProcedureRoot from './ProcedureRoot';

const ProcedureContainer = function(props) {
    return (
        <div>
            <h2>Procedures</h2>
            <ProcedureRoot procedure={ props.procedure }
                procedureList={ props.procedureList }
                fixList={ props.fixList }
                runwayList={ props.runwayList }
                onSaveProcedure={ props.saveProcedure }
                onEditProcedure={ props.editProcedure }
                onRemoveProcedure={ props.removeProcedure } />
        </div>
    );
};

ProcedureContainer.displayName = 'ProcedureContainer';

ProcedureContainer.propTypes = {
    procedure: PropTypes.object,
    procedureList: PropTypes.array,
    fixList: PropTypes.array,
    runwayList: PropTypes.array,
    saveProcedure: PropTypes.func.isRequired,
    editProcedure: PropTypes.func.isRequired,
    removeProcedure: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => ({
    procedure: store.procedure.payload,
    fixList: store.fixList.payload,
    runwayList: store.runwayList.payload,
    procedureList: store.procedureList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveProcedure: (procedureFormValues) => dispatch(saveProcedure(procedureFormValues)),
    editProcedure: (procedureModel) => dispatch(editProcedure(procedureModel)),
    removeProcedure: (procedureModel) => dispatch(removeProcedure(procedureModel))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProcedureContainer);
