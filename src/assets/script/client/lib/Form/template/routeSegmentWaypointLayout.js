import React from 'react';

export const routeSegmentWaypointLayout = (locals) => {
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="hlist">
            <li>{ locals.inputs.waypointName }</li>
            <li>{ locals.inputs.restrictions }</li>
        </ul>
    );
};
