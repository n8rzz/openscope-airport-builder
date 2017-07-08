import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

export default class FlashMessage extends Component {
    _buildListItems() {
        return _map(this.props.errorList, (error, i) => {
            return (
                <li key={`baseAirportFormError-${i}`}>
                    { error.message }
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    { this._buildListItems() }
                </ul>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    errorList: PropTypes.array
};
