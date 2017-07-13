import React from 'react';

export const routeSegmentWaypointLayout = (locals) => {
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="hlist hlist-spacious">
            <li>{ locals.inputs.waypointName }</li>
            <li>{ locals.inputs.altitude }</li>
            <li>{ locals.inputs.speed }</li>
        </ul>
    );
};
