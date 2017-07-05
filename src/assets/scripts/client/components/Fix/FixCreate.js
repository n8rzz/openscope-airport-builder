import React, { Component } from 'react';
import t from 'tcomb-form';
import { FixCreationType } from '../../domain/airport/FixType';

const Form = t.form.Form;

export default class FixCreate extends Component {
    constructor(props) {
        super();

        this._fixForm = null;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const value = this._fixForm.getValue();

        console.log('FixForm: ', value);
    };

    render() {
        return (
            <div>
                <h3>Add Fix</h3>
                <Form ref={ (f) => { this._fixForm = f; } }
                    type={ FixCreationType } />
                <button type="submit" onClick={ this.onSubmit }>Add Fix</button>
            </div>
        );
    }

}
