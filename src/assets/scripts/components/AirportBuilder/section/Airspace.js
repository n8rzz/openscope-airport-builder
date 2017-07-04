import React, { Component, PropTypes } from 'react';

export default class Airspace extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>airspace</h2>
                <ul>
                    <li>- floor</li>
                    <li>- ceiling</li>
                    <li>- airspace_class</li>
                    <li>- poly</li>
                </ul>
            </div>
        );
    }
}
