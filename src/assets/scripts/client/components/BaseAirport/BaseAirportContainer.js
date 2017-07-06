import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BaseAirport from './BaseAirport';

class BaseAirportContainer extends Component {
    render() {
        return (
            <BaseAirport />
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
    saveBaseAirport: (baseAirportForm) => dispatch(baseAirportForm(baseAirportForm))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(BaseAirportContainer);
