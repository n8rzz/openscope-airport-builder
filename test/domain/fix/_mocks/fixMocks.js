import { FixCreationType } from '../../../../src/assets/scripts/client/domain/fix/types/FixType';

export const fixCreationTypeMock = {
    name: 'COWBY',
    position: {
        latitude: 'N35.92358556169513',
        longitude: 'W113.90273980476096'
    }
};

export const FixCreationTypeFixture = new FixCreationType(fixCreationTypeMock);
