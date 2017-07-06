import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import baseAirport from './domain/baseAirport/reducers/BaseAirportReducer';

export default () => combineReducers({
    baseAirport,
    routing: routerReducer
});
