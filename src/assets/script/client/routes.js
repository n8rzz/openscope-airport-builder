import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';
import BaseAirportContainer from './components/BaseAirport/BaseAirportContainer';
import FixContainer from './components/Fix/FixContainer';
import RunwayContainer from './components/Runway/RunwayContainer';

export default function(store) {
    return (
        <Route path="/" component={ App }>
            <IndexRoute component={ BaseAirportContainer } />

            <Route path="/fixes" component={ FixContainer } />
            <Route path="/runways" component={ RunwayContainer } />
        </Route>
    );
}
