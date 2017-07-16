import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    saveFix,
    editFix,
    importFixList,
    removeFix
} from '../../domain/fix/actions/FixActions';
import FixRoot from './FixRoot';

const FixContainer = function(props) {
    return (
        <FixRoot fix={ props.fix }
            fixList={ props.fixList }
            onSaveFix={ props.saveFix }
            onEditFix={ props.editFix }
            onRemoveFix={ props.removeFix }
            onImportFixList={ props.importFixList } />
    );
};

FixContainer.propTypes = {
    fix: PropTypes.object,
    fixList: PropTypes.array,
    saveFix: PropTypes.func.isRequired,
    editFix: PropTypes.func.isRequired,
    importFixList: PropTypes.func.isRequired,
    removeFix: PropTypes.func.isRequired
};

const mapStoreToProps = (state) => ({
    fix: state.fix.payload,
    fixList: state.fixList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveFix: (fixFormValues) => dispatch(saveFix(fixFormValues)),
    editFix: (fixModel) => dispatch(editFix(fixModel)),
    importFixList: (fixListFormValues) => dispatch(importFixList(fixListFormValues)),
    removeFix: (fixName) => dispatch(removeFix(fixName))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FixContainer);
