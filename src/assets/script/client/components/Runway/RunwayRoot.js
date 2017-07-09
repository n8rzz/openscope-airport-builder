import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '../layout/Tabs/Tabs';
import RunwayList from './RunwayList';
import RunwayPair from './RunwayPair';

export default class RunwayRoot extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <Tabs.Tab title="List">
                        <RunwayList runwayList={ this.props.runwayList } />
                    </Tabs.Tab>
                    <Tabs.Tab title="Create">
                        <RunwayPair runwayPair={ this.props.runwayPair }
                            onSaveRunway={ this.props.onSaveRunway } />
                    </Tabs.Tab>
                </Tabs>
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
