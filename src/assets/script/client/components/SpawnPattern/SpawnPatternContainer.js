import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpawnPatternSingle from './SpawnPatternSingle';

const SpawnPatternContainer = function() {
    return (
        <div>
            <h2 className="hdg">SpawnPattern</h2>
            <SpawnPatternSingle />
        </div>
    );
};

SpawnPatternContainer.displayName = 'SpawnPatternContainer';

SpawnPatternContainer.propTypes = {};

const mapStoreToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(SpawnPatternContainer);
