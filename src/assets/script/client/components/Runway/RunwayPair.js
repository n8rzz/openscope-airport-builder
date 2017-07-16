import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import _isEqual from 'lodash/isEqual';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import Button from '../layout/Button/Button';
import { RunwayPairType } from '../../domain/runway/types/RunwayType';

const Form = t.form.Form;

export default class RunwayPair extends Component {
    constructor(props) {
        super();

        this._runwayPairForm = null;

        this.state = {
            formValues: props.runwayPair,
            formErrors: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (_isEqual(nextProps.runwayPair, this.state.formValues)) {
            return;
        }

        this.setState({
            formValues: nextProps.runwayPair
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValues = this._runwayPairForm.getValue();

        if (!formValues) {
            const formErrors = this._runwayPairForm.validate();

            this.setState({ formErrors: formErrors.errors });

            return;
        }

        this.props.onSaveRunway(formValues);
    };

    render() {
        return (
            <div>
                <FlashMessage errorList={ this.state.formErrors } />

                <Form ref={ (f) => { this._runwayPairForm = f; } }
                    value={ this.state.formValues }
                    type={ RunwayPairType } />

                <Button type={ Button.TYPE.SUBMIT }
                    label="Save"
                    onClick={ this.onSubmit } />
            </div>
        );
    }
}

RunwayPair.displayName = 'RunwayPair';

RunwayPair.propTypes = {
    runwayPair: PropTypes.object,
    onSaveRunway: PropTypes.func.isRequired
};
