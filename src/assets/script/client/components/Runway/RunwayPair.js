import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { RunwayPairType } from '../../domain/runway/types/RunwayType';

const Form = t.form.Form;

export default class RunwayPair extends Component {
    constructor(props) {
        super();

        this._runwayPairForm = null;

        this.state = {
            runwayPairFormValues: props.runwayPair,
            runwayPairFormErrors: null
        };
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValues = this._runwayPairForm.getValue();

        if (!formValues) {
            const formErrors = this._runwayPairForm.validate();
            this.setState({ runwayPairFormErrors: formErrors.errors });

            return;
        }

        this.props.onSaveRunway(formValues);
    };

    render() {
        return (
            <div>
                <FlashMessage errorList={ this.state.runwayPairFormErrors } />

                <Form ref={ (f) => { this._runwayPairForm = f; } }
                    value={ this.state.runwayPairFormValues }
                    type={ RunwayPairType } />

                <button onClick={ this.onSubmit }>Save</button>
            </div>
        );
    }
}

RunwayPair.displayName = 'RunwayPair';

RunwayPair.propTypes = {
    runwayPair: PropTypes.object,
    onSaveRunway: PropTypes.func.isRequired
};
