import React from 'react';
import _camelCase from 'lodash/camelCase';
import _get from 'lodash/get';
import _map from 'lodash/map';
import classNames from 'classnames';

export const listLayout = (locals) => {
    const buildVlistClassNames = () => classNames({
        vlist: true,
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
                    key={ `listLayout-item-button-${i}` }
                    onClick={ button.click }>
                    { button.label }
                </button>
            );
        });

        return (
            <li key={ item.key }>
                { item.input }
                <div className="btn-group">
                    { itemButtons }
                </div>
            </li>
        );
    });

    return (
        <fieldset className={`fieldset fieldset-depth-1 fieldset-${_camelCase(locals.label)}`}>
            { buildListLegend() }
            <ul className={ buildVlistClassNames() }>
                { itemsMap }
            </ul>
            <button className="btn btn-default btn-add"
                onClick={ locals.add.click }>
                { `${locals.add.label} ${locals.label}` }
            </button>
        </fieldset>
    );
};
