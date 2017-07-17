import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Button from '../layout/Button/Button';

export default class ProcedureList extends Component {
    constructor(props) {
        super();
    }

    onEditProcedure = (event, item) => {
        event.preventDefault()

        this.props.onEditProcedure(item);
    };

    onRemoveProcedure = (event, item) => {
        event.preventDefault();
    };

    _buildProcedureTableRows = () => {
        const listItems = _map(this.props.procedureList, (item, i) => {
            return (
                <tr key={ `procedureList-item-${i}` }>
                    <td>{ item.type }</td>
                    <td>{ item.icao }</td>
                    <td>{ item.name }</td>
                    <td>
                        <div className="btn-group">
                            <Button type={ Button.TYPE.DEFAULT }
                                label="Edit"
                                onClick={ (e) => this.onEditProcedure(e, item) } />
                            <Button type={ Button.TYPE.REMOVE }
                                label="Remove"
                                onClick={ (e) => this.onRemoveProcedure(e, item) } />
                        </div>
                    </td>
                </tr>
            );
        });

        return listItems;
    };

    render() {
        if (this.props.procedureList.length === 0) {
            return (
                <div>No procedures have been created for this airport</div>
            );
        }

        return (
            <div>
                <h2 className="hdg">
                    Procedure List
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Icao</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this._buildProcedureTableRows() }
                    </tbody>
                </table>
            </div>
        );
    }
}

ProcedureList.displayName = 'ProcedureList';

ProcedureList.propTypes = {
    procedureList: PropTypes.array,
    onEditProcedure: PropTypes.func.isRequired
};
