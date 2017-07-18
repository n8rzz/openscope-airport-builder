import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpawnPatternRoot from './SpawnPatternRoot';

const SpawnPatternContainer = function(props) {
    return (
        <SpawnPatternRoot procedureList={ props.procedureList } />
    );
};

SpawnPatternContainer.displayName = 'SpawnPatternContainer';

SpawnPatternContainer.propTypes = {
    procedureList: PropTypes.array
};

const mapStoreToProps = (state) => ({
    procedureList: state.procedureList.payload
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(SpawnPatternContainer);
