import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import Button from '../layout/Button/Button';
import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { ProcedureSingleType } from '../../domain/procedure/types/ProcedureType';
import { buildProcedureFormType } from '../../domain/procedure/types/buildProcedureFormType';
import { FORM_CONFIG } from './config/procedureSingleFormConfig';

const Form = t.form.Form;

export default class ProcedureSingle extends Component {
    constructor(props) {
        super();

        this.state = {
            formConfig: null
        };
    }

    componentWillMount(nextProps) {
        this.setState({
            formConfig: this._updateFormConfig(nextProps, null)
        });
    }

    _updateFormConfig(formValues) {
        return buildProcedureFormType(
            formValues,
            this.props.runwayList,
            this.props.fixList
        );
    }

    onChange = (formValues) => {
        const formConfig = this._updateFormConfig(formValues);

        this.setState({ formValues, formConfig });
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
                    type={ this.state.formConfig }
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
    fixList: PropTypes.array,
    runwayList: PropTypes.array,
    onSaveProcedure: PropTypes.func.isRequired
};
