import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TabsHead extends Component {
    _buildClassnames() {
        return classNames({
            'tab-hd-item': true,
            'tab-hd-item_isSelected': this.props.isSelected
        });
    }

    render() {
        return (
            <li className={ this._buildClassnames() }>
                <a href="#"
                    className="link"
                    onClick={ this.onClick }>
                    { this.props.title }
                </a>
            </li>
        );
    }

    onClick = (event) => {
        this.props.onRequestToChangeTab(event, this.props.index);
    };
}

TabsHead.displayName = 'TabsHead';

TabsHead.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onRequestToChangeTab: PropTypes.func
};
