import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import { FixImportType } from '../../domain/fix/types/FixType';

const Form = t.form.Form;
const FORM_OPTIONS = {
    fields: {
        data: {
            label: '',
            type: 'textarea'
        }
    }
};

export default class FixImport extends Component {
    constructor(props) {
        super();

        this._fixImportForm = null;
        this.state = {
            fixImportFormValues: null,
            fixImportFormErrors: null
        };
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formValues = this._fixImportForm.getValue();
        const formErrors = this._fixImportForm.validate();

        if (formErrors.errors.length > 0) {
            this.setState({ fixImportFormErrors: formErrors });

            return;
        }

        this.props.onImportFixList(formValues);
    };

    render() {
        return (
            <div>
                <Form ref={ (f) => { this._fixImportForm = f; } }
                    options={ FORM_OPTIONS }
                    type={ FixImportType } />
                <button type="submit" onClick={ this.onSubmit }>Import</button>
            </div>
        );
    }
}

FixImport.displayName = 'FixImport';

FixImport.propTypes = {
    onImportFixList: PropTypes.func.isRequired
};
