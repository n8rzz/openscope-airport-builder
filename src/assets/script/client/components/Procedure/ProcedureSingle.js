import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import _isEqual from 'lodash/isEqual';
import Button from '../layout/Button/Button';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { buildProcedureFormType } from '../../domain/procedure/types/buildProcedureFormType';
import { FORM_CONFIG } from './config/procedureSingleFormConfig';

const Form = t.form.Form;

export default class ProcedureSingle extends Component {
    constructor(props) {
        super();

        this.state = {
            formType: null,
            formValues: props.procedure
        };
    }

    componentWillReceiveProps(nextProps) {
        if (_isEqual(nextProps.procedure, this.state.formValues)) {
            return;
        }

        this.setState({
            formValues: nextProps.procedure
        });
    }

    componentWillMount() {
        this.setState({
            formType: this._updateFormType()
        });
    }

    _updateFormType(formValues = null) {
        const nextFormValues = !formValues
            ? this.state.formValues
            : formValues;

        return buildProcedureFormType(
            nextFormValues,
            this.props.runwayList,
            this.props.fixList
        );
    }

    onChange = (formValues) => {
        const formType = this._updateFormType(formValues);

        this.setState({ formValues, formType });
    };

    onSubmit = (event) => {
        const formValues = this._procedureForm.getValue();

        if (!formValues) {
            const formErrors = this._procedureForm.validate();

            this.setState({ formErrors });

            return;
        }

        const procedureSingleValues = formValues.toProcedureSingleType();

        this.props.onSaveProcedure(procedureSingleValues);
    };

    render() {
        return (
            <div>
                <FlashMessage errorList={ this.state.formErros } />
                <Form ref={ (f) => { this._procedureForm = f; } }
                    options={ FORM_CONFIG }
                    type={ this.state.formType }
                    value={ this.state.formValues }
                    onChange={ this.onChange } />
                <Button type={ Button.TYPE.SUBMIT }
                    label="Save"
                    onClick={ this.onSubmit } />
            </div>
        );
    }
}

ProcedureSingle.displayName = 'ProcedureSingle';

ProcedureSingle.propTypes = {
    procedure: PropTypes.object,
    fixList: PropTypes.array,
    runwayList: PropTypes.array,
    onSaveProcedure: PropTypes.func.isRequired
};
