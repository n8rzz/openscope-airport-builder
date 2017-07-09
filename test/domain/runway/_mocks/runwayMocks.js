import {
    RunwayPairType,
    RunwayPairListType
} from '../../../../src/assets/script/client/domain/runway/types/RunwayType';

export const runwayPairTypeMock = {
    runwayLeft: {
        name: '07L',
        position: {
            latitude: 'N36d4m34.82',
            longitude: 'W115d10m16.98',
            elevation: '2179ft'
        },
        ils: false
    },
    runwayRight: {
        name: '25R',
        position: {
            latitude: 'N36d4m35.05',
            longitude: 'W115d7m15.93',
            elevation: '2033ft'
        },
        ils: true
    }
};

export const RunwayPairTypeFixture = new RunwayPairType(runwayPairTypeMock);

export const runwayPairListTypeMock = [
    ...runwayPairTypeMock,
    {
        runwayLeft: {
            name: '12L',
            position: {
                latitude: 'N36d4m34.82',
                longitude: 'W115d10m16.98',
                elevation: '2179ft'
            },
            ils: false
        },
        runwayRight: {
            name: '30R',
            position: {
                latitude: 'N36d4m35.05',
                longitude: 'W115d7m15.93',
                elevation: '2033ft'
            },
            ils: true
        }
    }
];

export const RunwayPairListTypeFixture = new RunwayPairListType(runwayPairListTypeMock);

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
