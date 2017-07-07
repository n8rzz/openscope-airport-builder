import {
    FixUpdateType,
    FixListType
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
