import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProcedureRoot from './ProcedureRoot';

const ProcedureContainer = function(props) {
    return (
        <div>
            <h2>Procedures</h2>
            <ProcedureRoot />
        </div>
    );
};

const mapStoreToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProcedureContainer);
