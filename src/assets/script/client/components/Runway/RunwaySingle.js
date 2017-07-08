import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { RunwayUpdateType } from '../../domain/runway/types/RunwayType';

const Form = t.form.Form;

export default class RunwaySingle extends Component {
    constructor(props) {
        super();

        this._runwaySingleForm = null;

        this.state = {
            runwayFormValues: props.runway,
            runwayFormErrors: null
        };
    }

    get getValue() {
        return this._fixForm.getValue();
    }

    get validate() {
        return this._fixForm.validate();
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValues = this._runwaySingleForm.getValue();
        const formErrors = this._runwaySingleForm.validate();

        if (formErrors.errors.length > 0) {
            this.setState({ runwayFormErrors: formErrors.errors });

            return;
        }

        this.props.onSaveRunway(formValues);
    };

    render() {
        return (
            <div>
                <FlashMessage errorList={ this.state.runwayFormErrors } />
                <Form ref={ (f) => { this._runwaySingleForm = f; } }
                    value={ this.state.runwayFormValues }
                    type={ RunwayUpdateType } />
                <button onClick={ this.onSubmit }>Save</button>
            </div>
        );
    }
}

RunwaySingle.displayName = 'RunwaySingle';

RunwaySingle.propTypes = {
    runway: PropTypes.object,
    onSaveRunway: PropTypes.func.isRequired
};
