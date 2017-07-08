import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveRunway } from '../../domain/runway/actions/RunwayActions';
import RunwayRoot from './RunwayRoot';

class RunwayContainer extends Component {
    // constructor(props) {
    //     super();
    // }

    render() {
        return (
            <div>
                <h2>Runway</h2>
                <RunwayRoot runway={ this.props.runway }
                    onSaveRunway={ this.props.saveRunway } />
            </div>
        );
    }
}

RunwayContainer.displayName = 'RunwayContainer';

RunwayContainer.propTypes = {
    runway: PropTypes.object,
    saveRunway: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => ({
    runway: store.runway.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveRunway: (runwayFormValues) => dispatch(saveRunway(runwayFormValues))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(RunwayContainer);
