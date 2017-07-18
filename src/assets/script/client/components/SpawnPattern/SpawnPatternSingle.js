import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
// import Button from '../layout/Button/Button';
// import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { BaseSpawnPatternType } from '../../domain/spawnPattern/SpawnPatternType';

const Form = t.form.Form;
const FORM_OPTIONS = {};

function buildSpawnPatternFormType() {
    return BaseSpawnPatternType;
}

export default class SpawnPatternSingle extends Component {
    constructor(props) {
        super();

        this._spawnPatternForm = null;
        this.state = {
            formValues: null,
            formType: null
        };
    }

    componentWillMount() {
        const formType = this._buildFormType(this.state.formValues);

        this.setState({ formType });
    }

    _buildFormType = (formValues) => {
        return buildSpawnPatternFormType(
            formValues,
            this.props.procedureList
        );
    };

    onChange = (formValues) => {
        const formType = this._buildFormType(formValues);

        this.setState({ formValues, formType });
    };

    render() {
        return (
            <Form ref={ (f) => { this._spawnPatternForm = f; } }
                options={ FORM_OPTIONS }
                type={ this.state.formType }
                onChange={ this.onChange } />
        );
    }
}

SpawnPatternSingle.displayName = 'SpawnPatternSingle';

SpawnPatternSingle.propTypes = {
    procedureList: PropTypes.array.isRequired
};
