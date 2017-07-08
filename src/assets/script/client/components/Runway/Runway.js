import React, { Component } from 'react';
import t from 'tcomb-form';
import { RunwayCreationType } from '../../domain/airport/RunwayType';

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
                        type={ RunwayCreationType } />
                </div>
                <div>
                    <h3>List</h3>
                </div>
            </div>
        );
    }
}
