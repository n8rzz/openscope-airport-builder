import {
    FixUpdateType,
    FixListType,
    FixImportParsedCsvType,
    FixImportParsedCsvListType
} from '../../../../src/assets/script/client/domain/fix/types/FixType';

export const fixNamesToExcludeMock = ['COWBY', 'FRAWG', 'FUZZY'];

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
        name: 'CUTRO',
        position: {
            latitude: 'N35.60470439386878',
            longitude: 'W112.38335805786619'
        }
    },
    {
        name: 'DBIGE',
        position: {
            latitude: 'N36.44578613614583',
            longitude: 'W116.60826049345508'
        }
    },
    {
        name: 'DUBLX',
        position: {
            latitude: 'N36.17059038465186',
            longitude: 'W114.63748027193712'
        }
    },
    {
        name: 'FEBET',
        position: {
            latitude: 'N35.87194543503893',
            longitude: 'W115.28284237382348'
        }
    },
    {
        name: 'FIXIX',
        position: {
            latitude: 'N36.01499475348733',
            longitude: 'W115.20134441672967'
        }
    },
    {
        name: 'FLICR',
        position: {
            latitude: 'N36.07622810916583',
            longitude: 'W114.85148478998396'
        }
    },
    {
        name: 'FLYES',
        position: {
            latitude: 'N36.07604496870633',
            longitude: 'W114.76281138717750'
        }
    },
    {
        name: 'FORGE',
        position: {
            latitude: 'N35.86472292298355',
            longitude: 'W115.06848537453500'
        }
    },
    {
        name: 'FRAWG',
        position: {
            latitude: 'N36.14530265817758',
            longitude: 'W114.76779643367257'
        }
    },
    {
        name: 'FUZZY',
        position: {
            latitude: 'N36.20058355693305',
            longitude: 'W115.90025800614106'
        }
    },
    {
        name: 'GALNE',
        position: {
            latitude: 'N35.99218293438480',
            longitude: 'W115.21433575001986'
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

export const shortFixListTypeMock = [
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
        name: 'FRAWG',
        position: {
            latitude: 'N36.14530265817758',
            longitude: 'W114.76779643367257'
        }
    },
    {
        name: 'FUZZY',
        position: {
            latitude: 'N36.20058355693305',
            longitude: 'W115.90025800614106'
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

export const ShortFixListTypeFixture = new FixListType(shortFixListTypeMock);

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
