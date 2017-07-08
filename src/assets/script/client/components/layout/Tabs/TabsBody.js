import React from 'react';
import PropTypes from 'prop-types';

const TabsBody = (props) => {
    return (
        <li>
            { props.children }
        </li>
    );
};

TabsBody.displayName = 'TabsBody';

TabsBody.propTypes = {
    children: PropTypes.node
};

export default TabsBody;
