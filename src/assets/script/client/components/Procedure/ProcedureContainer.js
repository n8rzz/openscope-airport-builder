import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveProcedure } from '../../domain/procedure/actions/ProcedureActions';
import ProcedureRoot from './ProcedureRoot';

const ProcedureContainer = function(props) {
    return (
        <div>
            <h2>Procedures</h2>
            <ProcedureRoot procedure={ props.procedure }
                procedureList={ props.procedureList }
                fixList={ props.fixList }
                runwayList={ props.runwayList }
                onSaveProcedure={ props.saveProcedure } />
        </div>
    );
};

ProcedureContainer.displayName = 'ProcedureContainer';

ProcedureContainer.propTypes = {
    fixList: PropTypes.array,
    runwayList: PropTypes.array
};

const mapStoreToProps = (store) => ({
    procedure: store.procedure.payload,
    fixList: store.fixList.payload,
    runwayList: store.runwayList.payload,
    procedureList: store.procedureList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveProcedure: (procedureFormValues) => dispatch(saveProcedure(procedureFormValues))
});

ProcedureContainer.displayName = 'ProcedureContainer';

ProcedureContainer.propTypes = {
    procedure: PropTypes.object,
    fixList: PropTypes.array,
    runwayList: PropTypes.array,
    procedureList: PropTypes.array,
    saveProcedure: PropTypes.func.isRequired
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProcedureContainer);
