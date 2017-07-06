import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>AirportBuilder</h1>
                <ul>
                    <li>
                        <Link to="/">Base</Link>
                    </li>
                    <li>
                        <Link to="/fixes">Fixes</Link>
                    </li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element.isRequired
};
