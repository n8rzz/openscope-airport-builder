import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Tab from './Tab';
import TabsHeader from './TabsHeader';
import TabsBody from './TabsBody';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabId: 0
        };
    }

    onChangeActiveTab = (event, nextSelectedTabId) => {
        event.preventDefault();

        if (nextSelectedTabId === this.state.selectedTabId) {
            return;
        }

        this.setState({ selectedTabId: nextSelectedTabId });
    };

    _composeTabHeader() {
        const headerItems = _map(this.props.children, ({ props }, index) => {
            return (
                <TabsHeader key={ index }
                    index={ index }
                    title={ props.title }
                    isSelected={ this.state.selectedTabId === index }
                    onRequestToChangeTab={ (event) => this.onChangeActiveTab(event, index) } />
            );
        });

        return (
            <ul className="tab-hd">
                { headerItems }
            </ul>
        );
    }

    _composeTabBody(selectedTabId) {
        const bodyItems = _map(this.props.children, ({ props }, index) => {
            return (
                <TabsBody id={ index } key={ index }>
                    { props.children }
                </TabsBody>
            );
        });

        return (
            <ul className="tab-bd">
                { bodyItems[selectedTabId] }
            </ul>
        );
    }

    render() {
        return (
            <div className="tab">
                { this._composeTabHeader() }
                { this._composeTabBody(this.state.selectedTabId) }
            </div>
        );
    }
}

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
    children: PropTypes.node
};

Tabs.Tab = Tab;
