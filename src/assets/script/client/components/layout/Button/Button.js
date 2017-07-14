import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASSNAME = {
    ADD: 'btn-add',
    DEFAULT: 'btn-default',
    REMOVE: 'btn-remove',
    SUBMIT: 'btn-submit',
    SUCCESS: 'btn-success'
};

const Button = function(props) {
    const buildClassNames = () => classNames({
        btn: true,
        [`${CLASSNAME[props.type]}`]: true,
        [`${props.className}`]: true
    });

    if (props.isSubmit) {
        return (
            <button type="submit"
                className={ buildClassNames() }
                onClick={ (e) => props.onClick(e) }>
                { props.label }
            </button>
        );
    }

    return (
        <button className={ buildClassNames() }
            onClick={ (e) => props.onClick(e) }>
            { props.label }
        </button>
    );
};

Button.TYPE = {
    ADD: 'ADD',
    DEFAULT: 'DEFAULT',
    REMOVE: 'REMOVE',
    SUBMIT: 'SUBMIT',
    SUCCESS: 'SUCCESS'
};

Button.displayName = 'Button';

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    isSubmit: false,
    label: '',
    className: '',
    type: Button.TYPE.SUBMIT,
    onClick: () => {}
};

export default Button;
