import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RunwayList from './RunwayList';
import RunwayPair from './RunwayPair';

export default class RunwayRoot extends Component {
    render() {
        return (
            <div>
                <RunwayList runwayList={ this.props.runwayList } />
                <RunwayPair runwayPair={ this.props.runwayPair }
                    onSaveRunway={ this.props.onSaveRunway } />
            </div>
        );
    }
}

RunwayRoot.displayName = 'RunwayRoot';

RunwayRoot.propTypes = {
    runwayPair: PropTypes.object,
    runwayList: PropTypes.array,
    onSaveRunway: PropTypes.func.isRequired
};
