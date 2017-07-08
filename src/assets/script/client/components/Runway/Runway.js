import React, { Component } from 'react';
import t from 'tcomb-form';
import { RunwayUpdateType } from '../../domain/runway/types/RunwayType';

const Form = t.form.Form;

export default class Runway extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>Runway</h2>
                <div>
                    <h3>Add</h3>
                    <Form ref="runwayForm"
                        type={ RunwayUpdateType } />
                </div>
                <div>
                    <h3>List</h3>
                </div>
            </div>
        );
    }
}
