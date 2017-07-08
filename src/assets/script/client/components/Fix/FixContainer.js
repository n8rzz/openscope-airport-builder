import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    saveFix,
    importFixList,
    removeFix
} from '../../domain/fix/actions/FixActions';
import FixCreate from './FixCreate';
import FixImport from './FixImport';
import FixList from './FixList';

class FixContainer extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <h2>Fix</h2>
                <FixList fixList={ this.props.fixList }
                    onRemoveFix={ this.props.removeFix } />
                <FixCreate fix={ this.props.fix }
                    onSaveFix={ this.props.saveFix } />
                <FixImport onImportFixList={ this.props.importFixList } />
            </div>
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
