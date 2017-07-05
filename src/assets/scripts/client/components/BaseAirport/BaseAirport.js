import React, { Component } from 'react';
import t from 'tcomb-form';
import { BaseAirportCreationType } from '../../domain/airport/AirportType';

const Form = t.form.Form;

export default class AirportForm extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>Base Airport</h2>
                <Form ref="baseAirportForm"
                    type={ BaseAirportCreationType } />
            </div>
        );
    }
}
