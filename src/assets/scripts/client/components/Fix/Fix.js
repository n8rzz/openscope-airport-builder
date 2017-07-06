import React, { Component } from 'react';
import FixCreate from './FixCreate';
import FixImport from './FixImport';
import FixList from './FixList';

export default class Fix extends Component {
    render() {
        return (
            <div>
                <h2>Fix</h2>
                <FixCreate />
                <FixImport />
                <FixList />
            </div>
        );
    }
}
