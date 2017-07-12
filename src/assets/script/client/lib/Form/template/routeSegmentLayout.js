import React from 'react';

export const routeSegmentLayout = (locals) => {
    return (
        <ul className="hlist">
            {/* routeSegmentLayout */}
            <li>{ locals.inputs.name }</li>
            <li>{ locals.inputs.waypoints }</li>
        </ul>
    );
};
