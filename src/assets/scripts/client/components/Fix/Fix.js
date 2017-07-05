import React, { Component } from 'react';
import FixCreate from './FixCreate';
import FixImport from './FixImport';

export default class Fix extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>Fix</h2>
                <FixCreate />
                <FixImport />
                <div>
                    <h3>List</h3>
                </div>
            </div>
        );
    }
}
