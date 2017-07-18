import t from 'tcomb';
import _get from 'lodash/get';
import { ProcedureListType } from '../../procedure/types/ProcedureType';
import {
    SpawnPatternCategoryEnum,
    BaseSpawnPatternType,
    DepartureSpawnPatternType,
    ArrivalSpawnPatternType
} from './SpawnPatternType';

const BASE_FORM_CONFIG = {
    // order: [
    //     'category',
    //     'method',
    //     'origin',
    //     'destination',
    //     'route',
    //     'altitude',
    //     'speed',
    //     'rate'
    //     // 'airlines'
    // ],
    fields: {}
};

const _generateUpdatedFormConfig = (updatedConfig = {}) => {
    return Object.assign({}, BASE_FORM_CONFIG, updatedConfig);
};

const buildBaseFormConfig = (formValues) => _generateUpdatedFormConfig({});


const buildDepartureFormConfig = (formValues, airportIcao) => {
    const updatedConfig = {
        fields: {
            origin: {
                disabled: true
            }
        }
    }

    return _generateUpdatedFormConfig(updatedConfig);
};

const buildArrivalFormConfig = (formValues, airportIcao) => {
    const updatedConfig = {};

    return _generateUpdatedFormConfig(updatedConfig);
};



const buildBaseSpawnPatternType = (formValues, procedureList) => BaseSpawnPatternType;

const buildDepartureSpawnPatternType = (formValues, baseAirport, procedureList, spawnPatternType) => {
    const routeStrList = ProcedureListType.buildRouteStringList(procedureList, baseAirport.icao, spawnPatternType);

    return DepartureSpawnPatternType.extend({
        route: t.enums.of(routeStrList)
    });
}

const buildArrivalSpawnPatternType = (formValues, baseAirport, procedureList, spawnPatternType) => {
    const routeStrList = ProcedureListType.buildRouteStringList(procedureList, baseAirport.icao, spawnPatternType);

    return ArrivalSpawnPatternType.extend({
        route: t.enums.of(routeStrList)
    });
}

export const buildSpawnPatternFormType = (formValues, baseAirport, procedureList) => {
    let buildSpawnPatternType;
    let buildFormConfig;
    const spawnPatternType = _get(formValues, 'category', '').toUpperCase();

    switch (spawnPatternType) {
        case SpawnPatternCategoryEnum.meta.map.DEPARTURE:
            buildSpawnPatternType = buildDepartureSpawnPatternType;
            buildFormConfig = buildDepartureFormConfig;

            break;
        case SpawnPatternCategoryEnum.meta.map.ARRIVAL:
            buildSpawnPatternType = buildArrivalSpawnPatternType;
            buildFormConfig = buildArrivalFormConfig;

            break;
        default:
            buildSpawnPatternType = buildBaseSpawnPatternType;
            buildFormConfig = buildBaseFormConfig;

            break;
    }

    const formType = buildSpawnPatternType(formValues, baseAirport, procedureList, spawnPatternType);
    const formConfig = buildFormConfig(formValues, baseAirport.icao);

    return { formConfig, formType };
};
