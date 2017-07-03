import React, { Component, PropTypes } from 'react';
import Airspace from './section/Airspace';
// import Fix from './section/Fix';
// import Runway from './section/Runway';
// import ProcedureRoute from './section/ProcedureRoute';
// import SpawnPattern from './section/SpawnPattern';

export default class AirportForm extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <form name="airport-form">
                <ul className="vlist">
                    <li>
                        <label htmlFor="icao">Airport ICAO</label>
                        <input type="text" name="icao" />
                    </li>
                    <li>
                        <label htmlFor="iata">Airport IATA</label>
                        <input type="text" name="iata" />
                    </li>
                    <li>
                        <label htmlFor="magentic_north">magnetic_north</label>
                        <input type="text" name="magentic_north" />
                    </li>
                    <li>
                        <label htmlFor="ctr_radius">ctr_radius</label>
                        <input type="text" name="ctr_radius" />
                    </li>
                    <li>
                        <label htmlFor="ctr_ceiling">ctr_ceiling</label>
                        <input type="text" name="ctr_ceiling" />
                    </li>
                    <li>initial_alt</li>
                    <li>position</li>
                    <li>rr_radius_nm</li>
                    <li>rr_center</li>
                    <li>has_terrain</li>
                    <li>wind</li>
                    <li>- angle</li>
                    <li>- speed</li>
                </ul>

                <h2>radio</h2>

                <ul>
                    <li>
                        <label htmlFor="twr">twr</label>
                        <input type="text" name="twr" />
                    </li>
                    <li>
                        <label htmlFor="app">app</label>
                        <input type="text" name="app" />
                    </li>
                    <li>
                        <label htmlFor="dep">dep</label>
                        <input type="text" name="dep" />
                    </li>
                </ul>

                <Airspace />

                <ul>
                    <li>fixes</li>
                    <li>runways</li>
                    <li>- name</li>
                    <li>- end</li>
                    <li>- ils</li>
                    <li>airways</li>
                    <li>sids</li>
                    <li>stars</li>
                    <li>spawn patterns</li>
                    <li>maps</li>
                </ul>

                <div className="actionBar">
                    <ul className="hlist">
                        <li>
                            <button type="submit">Submit</button>
                        </li>
                    </ul>
                </div>
            </form>
        );
    }
}
