import React from 'react';
import _camelCase from 'lodash/camelCase';
import _get from 'lodash/get';
import _map from 'lodash/map';
import classNames from 'classnames';

export const childListLayout = (locals) => {
    const buildRootClassNames = () => classNames({
        fieldset: true,
        [`fieldset-${_camelCase(locals.label)}`]: true,
        'fieldset-depth-1': _get(locals, 'config.depth', 1) === 1,
        'fieldset-depth-2': _get(locals, 'config.depth', 1) === 2,
        'fieldset-depth-3': _get(locals, 'config.depth', 1) === 3
    });

    const buildVlistClassNames = () => classNames({
        vlist: true,
        'vlist-child': true,
        'vlist-divided': _get(locals, 'config.divided', false),
        'mix-vlist_striped': _get(locals, 'config.striped', false)
    });

    const buildListLegend = () => {
        if (_get(locals, 'config.hideLegend', false)) {
            return null;
        }

        return (
            <div>
                { locals.label }
            </div>
        );
    };

    const itemsMap = _map(locals.items, (item) => {
        const itemButtons = _map(item.buttons, (button, i) => {
            return (
                <button className="btn"
                    key={ `childListLayout-item-button-${i}` }
                    onClick={ button.click }>
                    { button.label }
                </button>
            );
        });

        return (
            <li key={ item.key }>
                <div className="btn-group u-floatRight" style={ { width: '20%' } }>
                    { itemButtons }
                </div>
                <div style={ { width: '80%' } }>
                    { item.input }
                </div>
            </li>
        );
    });

    return (
        <fieldset className={ buildRootClassNames() }>
            {/* childListLayout */}
            { buildListLegend() }
            <div>
                <ul className={ buildVlistClassNames() }>
                    { itemsMap }
                </ul>
            </div>
            <div className="btn-group">
                <button className="btn btn-default btn-add"
                    onClick={ locals.add.click }>
                    { `${locals.add.label} ${locals.label}` }
                </button>
            </div>
        </fieldset>
    );
};
