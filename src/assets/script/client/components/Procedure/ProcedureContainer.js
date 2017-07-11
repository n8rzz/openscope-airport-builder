import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProcedureRoot from './ProcedureRoot';

const ProcedureContainer = function(props) {
    return (
        <div>
            <h2>Procedures</h2>
            <ProcedureRoot fixList={ props.fixList }
                runwayList={ props.runwayList } />
        </div>
    );
};

ProcedureContainer.displayName = 'ProcedureContainer';

ProcedureContainer.propTypes = {
    fixList: PropTypes.array,
    runwayList: PropTypes.array
};

const mapStoreToProps = (store) => ({
    fixList: store.fixList.payload,
    runwayList: store.runwayList.payload
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProcedureContainer);
