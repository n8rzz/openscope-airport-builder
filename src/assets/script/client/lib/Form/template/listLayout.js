import React from 'react';
import _camelCase from 'lodash/camelCase';
import _map from 'lodash/map';

export const listLayout = (locals) => {
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
            <div>{ locals.label }</div>
            <ul className="vlist">
                { itemsMap }
            </ul>
            <button className="btn btn-default btn-add"
                onClick={ locals.add.click }>
                { locals.add.label }
            </button>
        </fieldset>
    );
};
