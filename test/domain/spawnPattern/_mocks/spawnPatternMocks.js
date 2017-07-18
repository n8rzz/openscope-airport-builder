export const baseSpawnPatternTypeMock = {
    category: 'departure',
    method: 'random',
    rate: 5,
    entrail: [10, 15]
};

export const departureSpawnPatternTypeMock = {
    route: 'KLAS.COWBY6.GUP',
    category: 'departure',
    method: 'random',
    rate: 5,
    entrail: [10, 15],
    origin: 'KLAS'
};

export const arrivalSpawnPatternTypeMock = {
    route: 'KLAS.COWBY6.GUP',
    category: 'arrival',
    method: 'random',
    rate: 5,
    entrail: [10, 15],
    destination: 'KLAS',
    altitude: [19000, 23000],
    speed: 240
};

export const spawnPatternMock = {
    origin: 'KLAS',
    destination: '',
    category: 'departure',
    route: 'KLAS.COWBY6.GUP',
    altitude: 0,
    method: 'random',
    entrail: [10, 22],
    rate: 5,
    airlines: [
        ['amx', 2],
        ['aca/long', 4],
        ['asa', 3],
        ['aay', 15]
    ]
};

export const spawnPatternListMock = [
    {
        origin: 'KLAS',
        destination: '',
        category: 'departure',
        route: 'KLAS.COWBY6.GUP',
        altitude: 0,
        method: 'random',
        entrail: [10, 22],
        rate: 5,
        airlines: [
            ['amx', 2],
            ['aca/long', 4],
            ['asa', 3],
            ['aay', 15]
        ]
    },
    {
        origin: '',
        destination: 'KLAS',
        category: 'arrival',
        route: 'BETHL.GRNPA1.KLAS',
        altitude: [30000, 40000],
        speed: 320,
        method: 'random',
        entrail: [10, 22],
        rate: 10,
        airlines: [
            ['aca/long', 4],
            ['aay', 15],
            ['aal', 10]
        ]
    }
];


export const spawnPatternPreviewMock = {
    origin: 'KLAS',
    destination: '',
    category: 'departure',
    route: 'KLAS.COWBY6.GUP',
    altitude: 0,
    method: 'random',
    entrail: [10, 22],
    rate: 5,
    airlines: [
        ['amx', 2],
        ['aca/long', 4],
        ['asa', 3],
        ['aay', 15]
    ]
};

export const spawnPatternPreviewListMock = [
    {
        origin: 'KLAS',
        destination: '',
        category: 'departure',
        route: 'KLAS.COWBY6.GUP',
        altitude: 0,
        method: 'random',
        entrail: [10, 22],
        rate: 5,
        airlines: [
            ['amx', 2],
            ['aca/long', 4],
            ['asa', 3],
            ['aay', 15]
        ]
    },
    {
        origin: '',
        destination: 'KLAS',
        category: 'arrival',
        route: 'BETHL.GRNPA1.KLAS',
        altitude: [30000, 40000],
        speed: 320,
        method: 'random',
        entrail: [10, 22],
        rate: 10,
        airlines: [
            ['aca/long', 4],
            ['aay', 15],
            ['aal', 10]
        ]
    }
];
