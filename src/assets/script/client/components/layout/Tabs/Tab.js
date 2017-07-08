import PropTypes from 'prop-types';

const Tab = (props) => {
    return (
        props.children
    );
};

/**
 * @property displayName
 * @type {String}
 * @static
 */
Tab.displayName = 'Tab';

Tab.propTypes = {
    children: PropTypes.node.isRequired
};

export default Tab;
