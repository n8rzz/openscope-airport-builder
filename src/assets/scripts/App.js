import React, { Component, PropTypes  } from 'react';
import AirportBuilder from './components/AirportBuilder/AirportBuilder';

export default class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <AirportBuilder />
        );
    }
}
