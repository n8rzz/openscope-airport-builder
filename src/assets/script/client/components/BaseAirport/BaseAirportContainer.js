import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveBaseAirport } from '../../domain/baseAirport/actions/BaseAirportActions';
import BaseAirport from './BaseAirport';

class BaseAirportContainer extends Component {
    render() {
        return (
            <BaseAirport baseAirport={ this.props.baseAirport }
                onSaveBaseAirport={ this.props.saveBaseAirport } />
        );
    }
}

BaseAirportContainer.propTypes = {
    baseAirport: PropTypes.object,
    saveBaseAirport: PropTypes.func.isRequired
};

const mapStoreToProps = (state) => ({
    baseAirport: state.baseAirport.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveBaseAirport: (baseAirportForm) => dispatch(saveBaseAirport(baseAirportForm))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(BaseAirportContainer);
