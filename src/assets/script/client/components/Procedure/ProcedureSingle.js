import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
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
            this.props.fixList,
            this.props.runwayList
        );
    }

    onChange = (formValues) => {
        console.log(formValues);

        const formConfig = this._updateFormConfig(formValues);

        this.setState({ formValues, formConfig });
    };

    render() {
        return (
            <div>
                <Form ref={ (f) => { this._procedureForm = f; } }
                    options={ FORM_CONFIG }
                    type={ this.state.formConfig }
                    value={ this.state.formValues }
                    onChange={ this.onChange } />
            </div>
        );
    }
}

ProcedureSingle.displayName = 'ProcedureSingle';

ProcedureSingle.propTypes = {
    fixList: PropTypes.array,
    runwayList: PropTypes.array
};
