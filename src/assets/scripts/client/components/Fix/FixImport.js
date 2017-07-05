import React, { Component } from 'react';
import t from 'tcomb-form';
import { FixImportType } from '../../domain/airport/FixType';

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
    }

    render() {
        return (
            <div>
                <Form ref="fixImportForm"
                    options={ FORM_OPTIONS }
                    type={ FixImportType } />
                <button type="submit">Import</button>
            </div>
        )
    }
}
