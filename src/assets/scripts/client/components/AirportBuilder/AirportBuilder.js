import React, { Component, PropTypes } from 'react';
import BaseAirport from './BaseAirport';
import Fix from '../Fix/Fix';
import Runway from '../Runway/Runway';
import Procedure from '../Procedure/Procedure';
import SpawnPattern from '../SpawnPattern/SpawnPattern';
import Airspace from '../Airspace/Airspace';
import Restricted from '../Restricted/Restricted';
import Map from '../Map/Map';

export default class AirportBuilder extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>AirportBuilder</h1>
                <ul>
                    <li>
                        <BaseAirport />
                    </li>
                    <li>
                        <Fix />
                    </li>
                    <li>
                        <Runway />
                    </li>
                    <li>
                        <Procedure />
                    </li>
                    <li>
                        <SpawnPattern />
                    </li>
                    <li>
                        <Airspace />
                    </li>
                    <li>
                        <Restricted />
                    </li>
                    <li>
                        <Map />
                    </li>
                </ul>
            </div>
        );
    }
}
