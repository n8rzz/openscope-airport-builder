import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import baseAirport from './domain/baseAirport/reducers/BaseAirportReducer';
import fix from './domain/fix/reducers/FixSingleReducer';
import fixList from './domain/fix/reducers/FixListReducer';

export default () => combineReducers({
    baseAirport,
    fix,
    fixList,
    routing: routerReducer
});
