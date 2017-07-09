import React from 'react';
import PropTypes from 'prop-types';

const PrettyPrint = function(props) {
    return (
        <pre>
            { JSON.stringify(props.data, null, 2) }
        </pre>
    );
};

PrettyPrint.displayName = 'PrettyPrint';

PrettyPrint.propTypes = {
    data: PropTypes.oneOf([PropTypes.array, PropTypes.object])
};

export default PrettyPrint;
