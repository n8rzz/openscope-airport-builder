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
            <FixCreate fix={ props.fix }
                onSaveFix={ props.saveFix } />
            <FixImport />
            <FixList />
        </div>
    );
};

FixContainer.propTypes = {
    fix: PropTypes.object,
    saveFix: PropTypes.func.isRequired
};

const mapStoreToProps = (state) => ({
    fix: state.fix.payload
});

const mapDispatchToProps = (dispatch) => ({
    saveFix: (fixFormValues) => dispatch(saveFix(fixFormValues))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(FixContainer);
