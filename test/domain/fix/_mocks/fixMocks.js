import { FixUpdateType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';

export const fixUpdateTypeMock = {
    name: 'COWBY',
    position: {
        latitude: 'N35.92358556169513',
        longitude: 'W113.90273980476096'
    }
};

export const FixUpdateTypeFixture = new FixUpdateType(fixUpdateTypeMock);
