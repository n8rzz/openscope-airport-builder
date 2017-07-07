import {
    FixUpdateType,
    FixListType,
    FixImportParsedCsvType,
    FixImportParsedCsvListType
} from '../../../../src/assets/scripts/client/domain/fix/types/FixType';

export const fixUpdateTypeMock = {
    name: 'COWBY',
    position: {
        latitude: 'N35.92358556169513',
        longitude: 'W113.90273980476096'
    }
};

export const FixUpdateTypeFixture = new FixUpdateType(fixUpdateTypeMock);

export const fixListTypeMock = [
    ...fixUpdateTypeMock,
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
