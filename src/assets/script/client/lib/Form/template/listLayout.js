import React from 'react';
import _camelCase from 'lodash/camelCase';
import _get from 'lodash/get';
import _map from 'lodash/map';
import classNames from 'classnames';
import Button from '../../../components/layout/Button/Button';

export const listLayout = (locals) => {
    const buildRootClassNames = () => classNames({
        fieldset: true,
        [`fieldset-${_camelCase(locals.label)}`]: true,
        'fieldset-depth-1': _get(locals, 'config.depth', 1) === 1,
        'fieldset-depth-2': _get(locals, 'config.depth', 1) === 2,
        'fieldset-depth-3': _get(locals, 'config.depth', 1) === 3
    });

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
                <Button key={ `listLayout-item-button-${i}` }
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
            {/* listLayout */}
            { buildListLegend() }
            <div className="vr_x2">
                <ul className={ buildVlistClassNames() }>
                    { itemsMap }
                </ul>
            </div>
            <div className="btn-group">
                <button className="btn btn-default btn-add"
                    type={ Button.TYPE.ADD }
                    label={ `${locals.add.label} ${locals.label}` }
                    onClick={ locals.add.click } />
            </div>
        </fieldset>
    );
};
