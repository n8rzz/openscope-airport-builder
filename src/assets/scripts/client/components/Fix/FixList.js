import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

class FixList extends Component {
    constructor(props) {
        super();
    }

    onRemoveFix(event, fixName) {
        event.preventDefault();

        this.props.onRemoveFix(fixName);
    }

    _buildFixListTableRows = () => {
        return _map(this.props.fixList, (fix, i) => {
            return (
                <tr key={ `fixListItem-${i}` }>
                    <td>{ fix.name }</td>
                    <td>{ fix.position.latitude }</td>
                    <td>{ fix.position.longitude }</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={ (e) => this.onRemoveFix(e, fix.name) }>Remove</button>
                    </td>
                </tr>
            );
        });
    }

    _buildFixListTable = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Actiion</th>
                    </tr>
                </thead>
                <tbody>
                    { this._buildFixListTableRows() }
                </tbody>
            </table>
        );
    }

    _renderEmptyList = () => {
        return (
            <div>Empty List</div>
        );
    }

    render() {
        const renderFixListBody = this.props.fixList.length === 0
            ? this._renderEmptyList
            : this._buildFixListTable;

        return (
            <div>
                <h3>List</h3>
                { renderFixListBody() }
            </div>
        );
    }
}

FixList.displayName = 'FixList';

FixList.propTypes = {
    fixList: PropTypes.array,
    onRemoveFix: PropTypes.func.isRequired
};

FixList.defaultProps = {
    fixList: []
};

export default FixList;
