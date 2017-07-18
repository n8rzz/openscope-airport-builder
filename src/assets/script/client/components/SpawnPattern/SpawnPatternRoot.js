import React from 'react';
import PropTypes from 'prop-types';
import SpawnPatternSingle from './SpawnPatternSingle';

const SpawnPatternRoot = function(props) {
    return (
        <div>
            <SpawnPatternSingle procedureList={ props.procedureList }
                baseAirport={ props.baseAirport }/>
        </div>
    );
};

SpawnPatternRoot.displayName = 'SpawnPatternRoot';

SpawnPatternRoot.propTypes = {
    procedureList: PropTypes.array,
    baseAirport: PropTypes.object
};

export default SpawnPatternRoot;
