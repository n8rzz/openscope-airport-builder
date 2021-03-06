import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import _isEqual from 'lodash/isEqual';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import Button from '../layout/Button/Button';
import { FixUpdateType } from '../../domain/fix/types/FixType';

const Form = t.form.Form;

export default class FixSingle extends Component {
    constructor(props) {
        super();

        this._fixForm = null;
        this.state = {
            formValues: props.fix
        };
    }

    componentWillReceiveProps(nextProps) {
        if (_isEqual(nextProps.fix, this.state.formValues)) {
            return;
        }

        this.setState({
            formValues: nextProps.fix
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValues = this._fixForm.getValue();
        const formErrors = this._fixForm.validate();

        if (formErrors.errors.length > 0) {
            this.setState({ fixFormErrors: formErrors.errors });

            return;
        }

        this.props.onSaveFix(formValues);
    };

    render() {
        return (
            <div>
                <FlashMessage errorList={ this.state.fixFormErrors } />
                <Form ref={ (f) => { this._fixForm = f; } }
                    type={ FixUpdateType }
                    value={ this.state.formValues } />
                <Button type={ Button.TYPE.SUBMIT }
                    label="Add Fix"
                    onClick={ this.onSubmit } />
            </div>
        );
    }
}

FixSingle.propTypes = {
    fix: PropTypes.object,
    onSaveFix: PropTypes.func.isRequired
};
