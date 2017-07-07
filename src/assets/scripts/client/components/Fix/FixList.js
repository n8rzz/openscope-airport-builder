import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

const FixList = function FixList(props) {
    const fixListTableRows = _map(props.fixList, (fix, i) => {
        return (
            <tr key={ `fixListItem-${i}` }>
                <td>{ fix.name }</td>
                <td>{ fix.position.latitude }</td>
                <td>{ fix.position.longitude }</td>
            </tr>
        );
    });

    return (
        <div>
            <h3>List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    { fixListTableRows }
                </tbody>
            </table>
        </div>
    );
}

FixList.displayName = 'FixList';

FixList.propTypes = {
    fixList: PropTypes.array
};

FixList.defaultProps = {
    fixList: []
};

export default FixList;
