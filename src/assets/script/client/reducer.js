import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import baseAirport from './domain/baseAirport/reducers/BaseAirportReducer';
import fix from './domain/fix/reducers/FixSingleReducer';
import fixList from './domain/fix/reducers/FixListReducer';
import runway from './domain/runway/reducers/RunwaySingleReducer';
import runwayList from './domain/runway/reducers/RunwayListReducer';

export default () => combineReducers({
    baseAirport,
    fix,
    fixList,
    runway,
    runwayList,
    routing: routerReducer
});
