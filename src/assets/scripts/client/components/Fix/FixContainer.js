import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveFix } from '../../domain/fix/actions/FixActions';
import FixCreate from './FixCreate';
import FixImport from './FixImport';
import FixList from './FixList';

const FixContainer = function FixContainer(props) {
    return (
        <div>
            <h2>Fix</h2>
            <FixList fixList={ props.fixList } />
            <FixCreate fix={ props.fix }
                onSaveFix={ props.saveFix } />
            <FixImport />
        </div>
    );
};

FixContainer.propTypes = {
    fix: PropTypes.object,
    fixList: PropTypes.array,
    saveFix: PropTypes.func.isRequired
};

const mapStoreToProps = (state) => ({
    fix: state.fix.payload,
    fixList: state.fixList.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveFix: (fixFormValues) => dispatch(saveFix(fixFormValues))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FixContainer);
