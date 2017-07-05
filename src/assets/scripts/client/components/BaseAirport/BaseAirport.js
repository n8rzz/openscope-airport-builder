import React, { Component } from 'react';
import t from 'tcomb-form';
import { BaseAirportCreationType } from '../../domain/airport/AirportType';

const Form = t.form.Form;

export default class AirportForm extends Component {
    constructor(props) {
        super();

        this._baseAirportForm = null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const value = this._baseAirportForm.getValue();

        console.log('BaseAirportForm: ', value);
    };

    render() {
        return (
            <div>
                <h2>Base Airport</h2>
                <Form ref={ (f) => { this._baseAirportForm = f } }
                    type={ BaseAirportCreationType } />
                <button type="submit" onClick={ this.onSubmit }>Submit</button>
            </div>
        );
    }
}
