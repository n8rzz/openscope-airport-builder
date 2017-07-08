import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../layout/Tabs/Tabs';
import FixCreate from './FixCreate';
import FixImport from './FixImport';
import FixList from './FixList';

const FixRoot = (props) => {
    return (
        <div>
            <h2 className="hdg">Fix</h2>
            <Tabs>
                <Tabs.Tab title="List">
                    <FixList fixList={ props.fixList }
                        onRemoveFix={ props.onRemoveFix } />
                </Tabs.Tab>
                <Tabs.Tab title="Create">
                    <FixCreate fix={ props.fix }
                        onSaveFix={ props.onSaveFix } />
                </Tabs.Tab>
                <Tabs.Tab title="Import">
                    <FixImport onImportFixList={ props.onImportFixList } />
                </Tabs.Tab>
            </Tabs>

        </div>
    );
};

FixRoot.displayName = 'FixRoot';

FixRoot.propTypes = {
    fix: PropTypes.object,
    fixList: PropTypes.array,
    onSaveFix: PropTypes.func.isRequired,
    onImportFixList: PropTypes.func.isRequired,
    onRemoveFix: PropTypes.func.isRequired
};

export default FixRoot;
