import ava from 'ava';
import {
    SAVE_BASE_AIRPORT_START,
    SAVE_BASE_AIRPORT_SUCCESS,
    SAVE_BASE_AIRPORT_ERROR
} from '../../../../src/assets/scripts/client/domain/baseAirport/actions/BaseAirportActions';
import {
    // BaseAirportType,
    BaseAirportStateType
} from '../../../../src/assets/scripts/client/domain/baseAirport/types/AirportType';
import saveAirportReducer from '../../../../src/assets/scripts/client/domain/baseAirport/reducers/BaseAirportReducer';

const BaseAirportTypeFixture = {
    icao: 'klas',
    iata: 'las',
    has_terrain: true,
    radio: {
        twr: 'Las Vegas Tower',
        app: 'Las Vegas Approach',
        dep: 'Las Vegas Departure'
    },
    position: {
        latitude: 'N36.080056',
        longitude: 'W115.15225',
        elevation: '2181ft'
    },
    magnetic_north: 11.9,
    ctr_radius: 80,
    ctr_ceiling: 19000,
    initial_alt: 19000,
    rr_radius_nm: 5.0,
    rr_center: {
        latitude: 'N36.080056',
        longitude: 'W115.15225'
    },
    wind: {
        angle: 220,
        speed: 6
    }
};

const INITIAL_STATE = new BaseAirportStateType({
    isLoading: false,
    payload: null,
    error: null
});

ava('saveAirportReducer updates #isLoading on SAVE_BASE_AIRPORT_START action', (t) => {
    t.notThrows(() => saveAirportReducer(INITIAL_STATE, { type: SAVE_BASE_AIRPORT_START }));

    const loadingState = saveAirportReducer(INITIAL_STATE, { type: SAVE_BASE_AIRPORT_START });

    t.true(loadingState.isLoading);
    t.true(loadingState.error === null);
});

ava('saveAirportReducer reducer sets payload', (t) => {
    t.notThrows(() => {
        saveAirportReducer(INITIAL_STATE, {
            type: SAVE_BASE_AIRPORT_SUCCESS,
            payload: BaseAirportTypeFixture
        });
    });

    const loadingState = saveAirportReducer(undefined, {
        type: SAVE_BASE_AIRPORT_SUCCESS,
        payload: BaseAirportTypeFixture
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.error, null);
});

ava('saveAirportReducer reducer sets error on SAVE_BASE_AIRPORT_ERROR', (t) => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        saveAirportReducer(INITIAL_STATE, {
            type: SAVE_BASE_AIRPORT_ERROR,
            errors: networkError
        });
    });

    const errorState = saveAirportReducer(INITIAL_STATE, {
        type: SAVE_BASE_AIRPORT_ERROR,
        error: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.error, networkError);
});
