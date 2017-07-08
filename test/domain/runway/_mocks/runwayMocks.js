import {
    RunwayUpdateType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';

export const runwayUpdateTypeMock = {
    name: '07L',
    position: {
        latitude: 'N36d4m34.82',
        longitude: 'W115d10m16.98',
        elevation: '2179ft'
    },
    ils: false,
    relatedTo: '25R'
};

export const RunwayUpdateTypeFixture = new RunwayUpdateType(runwayUpdateTypeMock);

export const runwayPreviewTypeMock = {
    name: ['07L', '25R'],
    end: [
        ['N36d4m34.82', 'W115d10m16.98', '2179ft'],
        ['N36d4m35.05', 'W115d7m15.93', '2033ft']
    ],
    ils: [false, true]
};

export const runwayPreviewListTypeMock = [
    {
        name: ['07L', '25R'],
        end: [
            ['N36d4m34.82', 'W115d10m16.98', '2179ft'],
            ['N36d4m35.05', 'W115d7m15.93', '2033ft']
        ],
        ils: [false, true]
    },
    {
        name: ['07R', '25L'],
        end: [
            ['N36d4m25.04', 'W115d9m41.15', '2157ft'],
            ['N36d4m25.17', 'W115d7m32.96', '2049ft']
        ],
        ils: [false, true]
    }
];
