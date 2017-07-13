import React from 'react';

export const routeSegmentWaypointLayout = (locals) => {
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="hlist hlist-spacious">
            <li>
                <div>{ locals.inputs.waypointName }</div>
                <div>{ locals.inputs.isHold }</div>
                <div>{ locals.inputs.isVector }</div>
            </li>
            <li>{ locals.inputs.altitude }</li>
            <li>{ locals.inputs.speed }</li>
        </ul>
    );
};
