import {
    ProcedureSingleType,
    ProcedureListType
} from '../../../../src/assets/script/client/domain/procedure/types/ProcedureType';

export const baseSegmentTypeMock = {
    type: 'SID',
    icao: 'COWBY6',
    name: 'Cowboy Six'
};

export const suffixDictMock = {
    '07L': '3T'
};

export const baseWaypointRestrictionTypeMock = {
    restrictionQulifier: 'MIN_MAX'
};

export const waypointRestrictionMinMaxTypeMock = Object.assign({}, baseWaypointRestrictionTypeMock, {
    minValue: 123,
    maxValue: 321
});

export const waypointRestrictionLtGtTypeMock = {
    restrictionQulifier: 'GT',
    value: 123
};

export const waypointRestrictionMaintainMock = {
    restrictionQulifier: 'MAINTAIN',
    value: 123
};

export const segmentWaypointSingleTypeMock = {
    isHold: true,
    isVector: false,
    waypointName: 'BESSY',
    altitude: {
        restrictionQualifier: 'MIN_MAX',
        minValue: 120,
        maxValue: 150
    },
    speed: {
        restrictionQualifier: 'MIN_MAX',
        minValue: 250,
        maxValue: 275
    }
};

export const segmentWaypointListTypeMock = [
    {
        waypointName: '_NAPSE068',
        isVector: true
    },
    {
        waypointName: 'BAKRR',
        altitude: {
            restrictionQualifier: 'MAINTAIN',
            value: 20
        }
    }
];

export const segmentSingleTypeMock = {
    name: 'COWBY',
    waypoints: segmentWaypointListTypeMock
};

export const segmentListTypeMock = [
    {
        name: 'COWBY',
        waypoints: segmentWaypointListTypeMock
    },
    {
        name: 'FIXIX',
        waypoints: segmentWaypointListTypeMock
    }
];

export const drawSegmentTypeMock = {
    drawSegment: ['COWBY', 'FIXIX']
};

export const drawSegmentListTypeMock = [
    {
        drawSegment: ['COWBY', 'FIXIX']
    },
    {
        drawSegment: ['GRNPA', 'FLICR']
    }
];

export const procedureSingleTypeMock = {
    ...baseSegmentTypeMock,
    suffix: suffixDictMock,
    rwy: segmentListTypeMock,
    body: segmentWaypointListTypeMock,
    draw: drawSegmentListTypeMock
};

export const procedureListTypeMock = [
    procedureSingleTypeMock,
    procedureSingleTypeMock
];

export const sidProcedureFormValueMock = {
    type: 'SID',
    icao: 'COWBY6',
    name: 'Cowboy 6',
    suffix: {
        '07L': '3D'
    },
    rwy: [
        {
            name: '07L',
            waypoints: [
                {
                    waypointName: '_NAPSE068',
                    isVector: true
                },
                {
                    waypointName: 'BAKRR',
                    altitude: {
                        restrictionQualifier: 'MAINTAIN',
                        value: 20
                    }
                },
                {
                    waypointName: 'BCE',
                    speed: {
                        restrictionQualifier: 'LT',
                        value: 250
                    }
                },
                {
                    isHold: true,
                    waypointName: 'BESSY',
                    altitude: {
                        restrictionQualifier: 'MIN_MAX',
                        minValue: 120,
                        maxValue: 150
                    },
                    speed: {
                        restrictionQualifier: 'MIN_MAX',
                        minValue: 250,
                        maxValue: 275
                    }
                }
            ]
        }
    ],
    body: [
        {
            waypointName: 'COWBY'
        }
    ],
    exitPoints: [
        {
            name: 'FLICR',
            waypoints: [
                {
                    waypointName: 'DUBLX'
                },
                {
                    waypointName: 'FLICR'
                }
            ]
        }
    ],
    draw: [
        {
            drawSegment: [
                'BAKRR',
                'BCE',
                'BESSY',
                'COWBY',
                'DUBLX',
                'FLICR'
            ]
        }
    ]
};

export const starProcedureFormValueMock = {
    type: 'STAR',
    icao: 'COWBY6',
    name: 'Cowboy 6',
    suffix: {
        '07L': '3D'
    },
    entryPoints: [
        {
            name: 'FLICR',
            waypoints: [
                {
                    waypointName: 'DUBLX'
                },
                {
                    waypointName: 'FLICR'
                }
            ]
        }
    ],
    body: [
        {
            waypointName: 'COWBY'
        }
    ],
    rwy: [
        {
            name: '07L',
            waypoints: [
                {
                    isHold: true,
                    waypointName: 'BESSY',
                    altitude: {
                        restrictionQualifier: 'MIN_MAX',
                        minValue: 120,
                        maxValue: 150
                    },
                    speed: {
                        restrictionQualifier: 'MIN_MAX',
                        minValue: 250,
                        maxValue: 275
                    }
                },
                {
                    waypointName: 'BAKRR',
                    altitude: {
                        restrictionQualifier: 'MAINTAIN',
                        value: 20
                    }
                },
                {
                    waypointName: 'BCE',
                    speed: {
                        restrictionQualifier: 'LT',
                        value: 250
                    }
                }
            ]
        }
    ],
    draw: [
        {
            drawSegment: [
                'BAKRR',
                'BCE',
                'BESSY',
                'COWBY',
                'DUBLX',
                'FLICR'
            ]
        }
    ]
};

export const ProcedureSingleTypeFixture = new ProcedureSingleType(sidProcedureFormValueMock);
export const InvalidProcedureSingleTypeFixture = new ProcedureSingleType(Object.assign(
    {},
    sidProcedureFormValueMock,
    { icao: 'THRVE' }
));

export const ProcedureListTypeFixture = new ProcedureListType([
    ProcedureSingleTypeFixture,
    InvalidProcedureSingleTypeFixture
]);

// Preview Types
export const sidProcedureRoutePreviewTypeMock = {
    COWBY6: {
        icao: 'COWBY6',
        name: 'Cowboy Six',
        suffix: { '1L': '', '1R': '', '28L': '', '28R': '' },
        rwy: {
            '01L': ['_RWY19R02DME', 'NAPSE', ['RIOOS', 'A130+'], 'COMPS'],
            '01R': ['_RWY19L02DME', 'NAPSE', ['RIOOS', 'A130+'], 'COMPS'],
            '07L': ['WASTE', ['BAKRR', 'A70'], 'COMPS'],
            '07R': ['JESJI', ['BAKRR', 'A70'], 'COMPS'],
            '19L': ['FIXIX', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
            '19R': ['JAKER', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
            '25L': ['PIRMD', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
            '25R': ['RBELL', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']]
        },
        body: ['COWBY'],
        exitPoints: {
            DRK: ['NAVHO', 'DRK'],
            GUP: [['MOSBI', 'A150+'], 'GUP'],
            INW: [['CUTRO', 'A150+'], 'INW']
        },
        draw: [
            ['ROPPR', 'CEASR', 'HITME', 'COWBY', 'MOSBI', 'GUP*'],
            ['BAKRR', 'COMPS', 'COWBY', 'CUTRO', 'INW*'],
            ['_RWY19L02DME', 'NAPSE'],
            ['_RWY19R02DME', 'NAPSE', 'RIOOS', 'COMPS'],
            ['COWBY', 'NAVHO', 'DRK*']
        ]
    }
};

export const starProcedureRoutePreviewTypeMock = {
    GRNPA1: {
        icao: 'GRNPA1',
        name: 'Grandpa One',
        suffix: { '1L': '', '1R': '', '28L': '', '28R': '' },
        entryPoints: {
            BETHL: ['BETHL', ['HOLDM', 'A270']],
            BCE: ['BCE'],
            DVC: ['DVC', 'BETHL', ['HOLDM', 'A270']],
            MLF: ['MLF']
        },
        body: [
            ['KSINO', 'A170'],
            ['LUXOR', 'A120|S250'],
            ['GRNPA', 'A110'],
            ['DUBLX', 'A90'],
            ['FRAWG', 'A80|S210'],
            'TRROP',
            'LEMNZ'
        ],
        rwy: {
            '01L': [],
            '01R': [],
            '07L': [],
            '07R': [],
            '19L': [],
            '19R': [],
            '25L': [],
            '25R': []
        },
        draw: [['ENI*', 'PYE'], ['MXW*', 'PYE'], ['PYE', 'STINS', 'HADLY', 'OSI']]
    }
};
