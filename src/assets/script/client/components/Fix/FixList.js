import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Button from '../layout/Button/Button';

export default class FixList extends Component {
    constructor(props) {
        super();
    }

    onEditFix(event, fix) {
        event.preventDefault();

        this.props.onEditFix(fix);
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
                        <Button type={ Button.TYPE.DEFAULT }
                            label="Edit"
                            onClick={ (e) => this.onEditFix(e, fix) } />
                        <Button type={ Button.TYPE.REMOVE }
                            label="Remove"
                            onClick={ (e) => this.onRemoveFix(e, fix.name) } />
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
                        <th>Action</th>
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
                { renderFixListBody() }
            </div>
        );
    }
}

FixList.displayName = 'FixList';

FixList.propTypes = {
    fixList: PropTypes.array,
    onEditFix: PropTypes.func.isRequired,
    onRemoveFix: PropTypes.func.isRequired
};

FixList.defaultProps = {
    fixList: []
};
