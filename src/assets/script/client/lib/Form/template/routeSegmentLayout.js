import React from 'react';

export const routeSegmentLayout = (locals) => {
    return (
        <div>
            <ul className="hlist">
                <li>{ locals.inputs.name }</li>
                <li>{ locals.inputs.waypoints }</li>
            </ul>
        </div>
    );
};
