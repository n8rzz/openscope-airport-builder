import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    saveRunway,
    editRunwayPair,
    removeRunwayPair
} from '../../domain/runway/actions/RunwayActions';
import RunwayRoot from './RunwayRoot';

const RunwayContainer = function(props) {
    return (
        <div>
            <h2 className="hdg">Runway</h2>
            <RunwayRoot runwayPair={ props.runwayPair }
                runwayList={ props.runwayList }
                onSaveRunway={ props.saveRunway }
                onEditRunwayPair={ props.editRunwayPair }
                onRemoveRunwayPair={ props.removeRunwayPair } />
        </div>
    );
};

RunwayContainer.displayName = 'RunwayContainer';

RunwayContainer.propTypes = {
    runwayPair: PropTypes.object,
    runwayList: PropTypes.array,
    saveRunway: PropTypes.func.isRequired,
    editRunwayPair: PropTypes.func.isRequired,
    removeRunwayPair: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => ({
    runwayPair: store.runwayPair.payload,
    runwayList: store.runwayList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveRunway: (runwayFormValues) => dispatch(saveRunway(runwayFormValues)),
    editRunwayPair: (runwayPairModel) => dispatch(editRunwayPair(runwayPairModel)),
    removeRunwayPair: (runwayPair) => dispatch(removeRunwayPair(runwayPair))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(RunwayContainer);
