import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import baseAirport from './domain/baseAirport/reducers/BaseAirportReducer';
import fix from './domain/fix/reducers/FixSingleReducer';
import fixList from './domain/fix/reducers/FixListReducer';
import runwayPair from './domain/runway/reducers/RunwaySingleReducer';
import runwayList from './domain/runway/reducers/RunwayListReducer';
import procedure from './domain/procedure/reducers/ProcedureSingleReducer';
import procedureList from './domain/procedure/reducers/ProcedureListReducer';

export default () => combineReducers({
    baseAirport,
    fix,
    fixList,
    runwayPair,
    runwayList,
    procedure,
    procedureList,
    routing: routerReducer
});
