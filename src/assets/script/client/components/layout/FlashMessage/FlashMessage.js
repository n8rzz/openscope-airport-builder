import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

const FlashMessage = function(props) {
    if (!props.errorList || props.errorList.length === 0) {
        return null;
    }

    const _buildListItems = () => {
        return _map(props.errorList, (error, i) => {
            return (
                <li key={`flashMessage-item-${i}`}>
                    { error.message }
                </li>
            );
        });
    };

    return (
        <div className="flashMessage">
            <ul>
                { _buildListItems() }
            </ul>
        </div>
    );
};

FlashMessage.displayName = 'FlashMessage';

FlashMessage.propTypes = {
    errorList: PropTypes.array
};

export default FlashMessage;
