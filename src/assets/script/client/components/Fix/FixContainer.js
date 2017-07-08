import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    saveFix,
    importFixList,
    removeFix
} from '../../domain/fix/actions/FixActions';
import FixRoot from './FixRoot';

class FixContainer extends Component {
    render() {
        return (
            <FixRoot fix={ this.props.fix }
                fixList={ this.props.fixList }
                onRemoveFix={ this.props.removeFix }
                onSaveFix={ this.props.saveFix }
                onImportFixList={ this.props.importFixList } />
        );
    }
}

FixContainer.propTypes = {
    fix: PropTypes.object,
    fixList: PropTypes.array,
    saveFix: PropTypes.func.isRequired,
    importFixList: PropTypes.func.isRequired,
    removeFix: PropTypes.func.isRequired
};

const mapStoreToProps = (state) => ({
    fix: state.fix.payload,
    fixList: state.fixList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveFix: (fixFormValues) => dispatch(saveFix(fixFormValues)),
    importFixList: (fixListFormValues) => dispatch(importFixList(fixListFormValues)),
    removeFix: (fixName) => dispatch(removeFix(fixName))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FixContainer);
