import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

const ProcedureList = function(props) {
    const listItems = _map(props.procedureList, (item, i) => {
        return (
            <li key={ `procedureList-item-${i}` }>{ item.type } { item.icao } { item.names }</li>
        );
    });

    return (
        <div>
            <h2 className="hdg">Procedure List</h2>
            <ul className="vlist">
                { listItems }
            </ul>
        </div>
    );
};

ProcedureList.displayName = 'ProcedureList';

ProcedureList.propTypes = {
    procedureList: PropTypes.array
};

export default ProcedureList;
