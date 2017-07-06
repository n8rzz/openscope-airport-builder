import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import baseAirport from './domain/baseAirport/reducers/BaseAirportReducer';
import fix from './domain/fix/reducers/FixReducers';

export default () => combineReducers({
    baseAirport,
    fix,
    routing: routerReducer
});
