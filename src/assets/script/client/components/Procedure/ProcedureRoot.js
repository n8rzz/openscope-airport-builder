import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureSingle from './ProcedureSingle';

export default class ProcedureRoot extends Component {
    get isDisabled() {
        return this.props.fixList.length === 0 ||
            this.props.runwayList.length === 0;
    }

    render() {
        if (this.isDisabled) {
            return (
                <div>
                    You must add at least one Fix and at least one Runway pair before creating a Procedure.
                </div>
            );
        }

        return (
            <div>
                <ProcedureSingle fixList={ this.props.fixList }
                    runwayList={ this.props.runwayList } />
            </div>
        );
    }
}

ProcedureRoot.displayName = 'ProcedureRoot';

ProcedureRoot.propTypes = {
    fixList: PropTypes.array,
    runwayList: PropTypes.array
};
