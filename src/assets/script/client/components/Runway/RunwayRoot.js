import React from 'react';
import PropTypes from 'prop-types';
import RunwayList from './RunwayList';
import RunwayPair from './RunwayPair';

const RunwayRoot = function(props) {
    return (
        <div>
            <RunwayList runwayList={ props.runwayList }
                onEditRunwayPair={ props.onEditRunwayPair }
                onRemoveRunwayPair={ props.onRemoveRunwayPair } />
            <RunwayPair runwayPair={ props.runwayPair }
                onSaveRunway={ props.onSaveRunway } />
        </div>
    );
};

RunwayRoot.displayName = 'RunwayRoot';

RunwayRoot.propTypes = {
    runwayPair: PropTypes.object,
    runwayList: PropTypes.array,
    onEditRunwayPair: PropTypes.func.isRequired,
    onSaveRunway: PropTypes.func.isRequired,
    onRemoveRunwayPair: PropTypes.func.isRequired
};

export default RunwayRoot;
