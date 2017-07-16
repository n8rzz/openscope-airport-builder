import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureList from './ProcedureList';
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
                <ProcedureList procedureList={ this.props.procedureList } />
                <ProcedureSingle procedure={ this.props.procedure }
                    fixList={ this.props.fixList }
                    runwayList={ this.props.runwayList }
                    onSaveProcedure={ this.props.onSaveProcedure } />
            </div>
        );
    }
}

ProcedureRoot.displayName = 'ProcedureRoot';

ProcedureRoot.propTypes = {
    procedure: PropTypes.object,
    procedureList: PropTypes.array,
    fixList: PropTypes.array,
    runwayList: PropTypes.array,
    onSaveProcedure: PropTypes.func.isRequired
};
