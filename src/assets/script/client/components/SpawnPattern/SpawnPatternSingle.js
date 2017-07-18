import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import _get from 'lodash/get';
import { buildSpawnPatternFormType } from '../../domain/spawnPattern/types/buildSpawnPatternFormType';

const Form = t.form.Form;

export default class SpawnPatternSingle extends Component {
    constructor(props) {
        super();

        this._spawnPatternForm = null;
        this.state = {
            formConfig: null,
            formValues: null,
            formType: null
        };
    }

    get isDisabled() {
        const airporticao = _get(this.props, 'baseAirport.icao', '');

        return airporticao === '' || this.props.procedureList.length === 0;
    }

    componentWillMount() {
        const { formConfig, formType } = this._buildFormType(this.state.formValues);

        this.setState({ formConfig, formType });
    }

    _buildFormType = (formValues) => {
        return buildSpawnPatternFormType(
            formValues,
            this.props.baseAirport,
            this.props.procedureList
        );
    };

    onChange = (formValues) => {
        const { formConfig, formType } = this._buildFormType(formValues);

        this.setState({ formConfig, formType, formValues });
    };

    render() {
        // if (this.isDisabled) {
        //     return (
        //         <div>
        //             Please define basic Airport properties and at least one Procedure before defining SpawnPatterns.
        //         </div>
        //     );
        // }

        return (
            <Form ref={ (f) => { this._spawnPatternForm = f; } }
                options={ this.state.formConfig }
                type={ this.state.formType }
                value={ this.state.formValues }
                onChange={ this.onChange } />
        );
    }
}

SpawnPatternSingle.displayName = 'SpawnPatternSingle';

SpawnPatternSingle.propTypes = {
    procedureList: PropTypes.array,
    baseAirport: PropTypes.object
};
