import {
    FixUpdateType,
    FixListType,
    FixImportParsedCsvType,
    FixImportParsedCsvListType
} from '../../../../src/assets/script/client/domain/fix/types/FixType';

export const fixUpdateTypeMock = {
    name: 'COWBY',
    position: {
        latitude: 'N35.92358556169513',
        longitude: 'W113.90273980476096'
    }
};

export const FixUpdateTypeFixture = new FixUpdateType(fixUpdateTypeMock);

export const fixListTypeMock = [
    {
        name: '_NAPSE068',
        position: {
            latitude: 'N36.11211',
            longitude: 'W115.14661'
        }
    },
    {
        name: 'BAKRR',
        position: {
            latitude: 'N36.07582112978773',
            longitude: 'W114.95309917207562'
        }
    },
    {
        name: 'BCE',
        position: {
            latitude: 'N37.68918661436860',
            longitude: 'W112.30389943797489'
        }
    },
    {
        name: 'BESSY',
        position: {
            latitude: 'N36.10772192196994',
            longitude: 'W115.28956463349111'
        }
    },
    {
        name: 'COWBY',
        position: {
            latitude: 'N35.92358556169513',
            longitude: 'W113.90273980476096'
        }
    },
    {
        name: 'GRNPA',
        position: {
            latitude: 'N36.26467677181758',
            longitude: 'W114.51481791576114'
        }
    }
];

export const FixListTypeFixture = new FixListType(fixListTypeMock);

export const fixImportParsedCsvTypeMock = {
    name: 'ASDAK',
    latitude: '50.602222',
    longitude: '6.251944'
};

export const FixImportParsedCsvTypeFixture = new FixImportParsedCsvType(fixImportParsedCsvTypeMock);

export const fixImportParsedCsvListTypeMock = [
    ...fixImportParsedCsvTypeMock,
    {
        name: 'BLUU',
        latitude: '50.602222',
        longitude: '6.251944'
    }
];

export const FixImportParsedCsvListTypeFixture = new FixImportParsedCsvListType(fixImportParsedCsvListTypeMock);
