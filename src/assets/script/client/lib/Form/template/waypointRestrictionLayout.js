import React from 'react';

export const waypointRestrictionLayout = (locals) => {
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="vlist vlist-child">
            {/* waypointRestrictionLayout */}
            <li>
                <ul className="hlist">
                    <li>{ locals.inputs.altitude }</li>
                    <li>{ locals.inputs.altitudeRestrictionQulifier }</li>
                </ul>
            </li>
            <li>
                <ul className="hlist">
                    <li>{ locals.inputs.speed }</li>
                    <li>{ locals.inputs.speedRestrictionQulifier }</li>
                </ul>
            </li>
        </ul>
    );
};
