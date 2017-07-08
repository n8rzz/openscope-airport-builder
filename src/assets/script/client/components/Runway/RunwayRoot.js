import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RunwaySingle from './RunwaySingle';

export default class RunwayRoot extends Component {
    render() {
        return (
            <div>
                <RunwaySingle runway={ this.props.runway }
                    onSaveRunway={ this.props.onSaveRunway } />
            </div>
        );
    }
}

RunwayRoot.displayName = 'RunwayRoot';

RunwayRoot.propTypes = {
    runway: PropTypes.object,
    onSaveRunway: PropTypes.func.isRequired
};
