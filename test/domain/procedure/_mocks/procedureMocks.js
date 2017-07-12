
export const sidProcedureFormValues = {
    type: 'SID',
    rwy: [
        {
            name: '07L',
            waypoints: [
                {
                    waypointName: 'BAKRR'
                },
                {
                    waypointName: 'BCE'
                },
                {
                    waypointName: 'BESSY'
                }
            ]
        },
        {
            name: '25R',
            waypoints: [
                {
                    waypointName: 'COWBY'
                },
                {
                    waypointName: 'CUTRO'
                },
                {
                    waypointName: 'DBIGE'
                }
            ]
        }
    ],
    body: [
        'DUBLX',
        'FEBET'
    ],
    exitPoints: [
        {
            name: 'FUZZY',
            waypoints: [
                {
                    waypointName: 'FIXIX'
                },
                {
                    waypointName: 'FLYES'
                },
                {
                    waypointName: 'FUZZY'
                }
            ]
        },
        {
            name: 'GRNPA',
            waypoints: [
                {
                    waypointName: 'GALNE'
                },
                {
                    waypointName: 'GRNPA'
                }
            ]
        }
    ]
};

export const sidProcedureRouteDictMock = {
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

export const starProcedureRouteDictMock = {
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
        draw: [['ENI*','PYE'], ['MXW*','PYE'], ['PYE','STINS','HADLY','OSI']]
    }
};
