import React from 'react';
import _camelCase from 'lodash/camelCase';
import _get from 'lodash/get';
import _map from 'lodash/map';
import classNames from 'classnames';
import Button from '../../../components/layout/Button/Button';

export const childListLayout = (locals) => {
    const buildRootClassNames = () => classNames({
        fieldset: true,
        [`fieldset-${_camelCase(locals.label)}`]: true,
        'fieldset-depth-1': _get(locals, 'config.depth', 1) === 1,
        'fieldset-depth-2': _get(locals, 'config.depth', 1) === 2,
        'fieldset-depth-3': _get(locals, 'config.depth', 1) === 3
    });

    const buildListClassNames = () => classNames({
        hlist: _get(locals, 'config.hlist', false),
        'hlist-spacious': _get(locals, 'config.hlist', false) && _get(locals, 'config.hlistSpacious', false),
        vlist: !_get(locals, 'config.hlist', false),
        'vlist-child': !_get(locals, 'config.hlist', false),
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
                <Button key={ `childListLayout-item-button-${i}` }
                    type={ Button.TYPE[button.type.toUpperCase()] }
                    label={ button.label }
                    onClick={ button.click } />
            );
        });

        return (
            <li key={ item.key }>
                <div>
                    { item.input }
                </div>
                <div className="btn-group">
                    { itemButtons }
                </div>
            </li>
        );
    });

    return (
        <fieldset className={ buildRootClassNames() }>
            { buildListLegend() }
            <div>
                <ul className={ buildListClassNames() }>
                    { itemsMap }
                </ul>
            </div>
            <div className="btn-group">
                <Button type={ Button.TYPE.ADD }
                    label={ `${locals.add.label} ${locals.label}` }
                    onClick={ locals.add.click } />
            </div>
        </fieldset>
    );
};
