import React, { Component, PropTypes } from 'react';
import AirportForm from './AirportForm';

export default class AirportBuilder extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>AirportBuilder</h1>
                <AirportForm />
            </div>
        );
    }
}
