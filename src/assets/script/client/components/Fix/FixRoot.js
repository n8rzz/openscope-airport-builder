import React from 'react';
import PropTypes from 'prop-types';
import FixSingle from './FixSingle';
import FixImport from './FixImport';
import FixList from './FixList';

const FixRoot = (props) => {
    return (
        <div>
            <h2 className="hdg">Fix</h2>
                <FixImport onImportFixList={ props.onImportFixList } />
                <FixSingle fix={ props.fix }
                    onSaveFix={ props.onSaveFix } />
                <FixList fixList={ props.fixList }
                    onEditFix={ props.onEditFix }
                    onRemoveFix={ props.onRemoveFix } />
        </div>
    );
};

FixRoot.displayName = 'FixRoot';

FixRoot.propTypes = {
    fix: PropTypes.object,
    fixList: PropTypes.array,
    onSaveFix: PropTypes.func.isRequired,
    onEditFix: PropTypes.func.isRequired,
    onImportFixList: PropTypes.func.isRequired,
    onRemoveFix: PropTypes.func.isRequired
};

export default FixRoot;
