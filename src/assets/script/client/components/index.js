import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './layout/Nav/Nav';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="hdg">AirportBuilder</h1>
                <Nav />
                { this.props.children }
            </div>
        );
    }
}

App.displayName = 'App';

App.propTypes = {
    children: PropTypes.element.isRequired
};
