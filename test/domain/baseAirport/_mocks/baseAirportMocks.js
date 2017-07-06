import { BaseAirportCreationType } from '../../../../src/assets/scripts/client/domain/baseAirport/types/AirportType';

export const baseAirportTypeMock = {
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

export const BaseAirportCreationTypeFixture = new BaseAirportCreationType(baseAirportTypeMock);
