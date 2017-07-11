import React from 'react';

export const waypointRestrictionLayout = (locals) => {
    console.log('++', locals);
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="vlist">
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
