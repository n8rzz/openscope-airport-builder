import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseAirport from './BaseAirport';

class BaseAirportContainer extends Component {
    render() {
        return (
            <BaseAirport />
        );
    }
}

const mapStoreToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(BaseAirportContainer);
