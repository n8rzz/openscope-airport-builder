import React, { Component } from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
// import Button from '../layout/Button/Button';
// import FlashMessage from '../layout/FlashMessage/FlashMessage';
import { BaseSpawnPatternType } from '../../domain/spawnPattern/SpawnPatternType';

const Form = t.form.Form;
const FORM_OPTIONS = {};

export default class SpawnPatternSingle extends Component {
    constructor(props) {
        super();

        this._spawnPatternForm = null;
    }

    _buildFormType(formValues) {
        return BaseSpawnPatternType;
    }

    render() {
        return (
            <Form ref={ (f) => { this._spawnPatternForm = f; } }
                options={ FORM_OPTIONS }
                type={ BaseSpawnPatternType } />
        );
    }
}

SpawnPatternSingle.displayName = 'SpawnPatternSingle';

SpawnPatternSingle.propTypes = {};
