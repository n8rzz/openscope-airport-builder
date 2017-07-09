import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RunwayList extends Component {
    render() {
        if (this.props.runwayList.length === 0) {
            return (
                <div>
                    Empty List
                </div>
            );
        }

        return (
            <pre>
                { JSON.stringify(this.props.runwayList) }
            </pre>
        );
    }
}

RunwayList.propTypes = {
    runwayList: PropTypes.array
};
