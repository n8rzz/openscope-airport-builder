import {
    listLayout,
    childListLayout,
    routeSegmentLayout,
    routeSegmentWaypointLayout
} from '../../../lib/Form/template';

const routeSegmentConfig = {
    template: listLayout,
    config: {
        striped: true,
        divided: true,
        depth: 1
    },
    disableOrder: true,
    item: {
        template: routeSegmentLayout,
        fields: {
            waypoints: {
                template: childListLayout,
                config: {
                    striped: true,
                    divided: false,
                    hideLegend: true,
                    depth: 2
                },
                disableOrder: true,
                item: {
                    template: routeSegmentWaypointLayout,
                    fields: {
                        altitude: {
                            label: 'Altitude Restriction',
                            fields: {
                                restrictionQualifier: {
                                    legend: false
                                }
                            }
                        },
                        speed: {
                            label: 'Speed Restriction',
                            fields: {
                                restrictionQualifier: {
                                    legend: false
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export const FORM_CONFIG = {
    i18n: {
        add: 'Add',         // add button
        down: 'Down',       // move down button
        optional: '',       // suffix added to optional fields
        required: '',       // suffix added to required fields
        remove: 'Remove',   // remove button
        up: 'Up'            // move up button
    },
    fields: {
        draw: {
            template: listLayout
        },
        body: {
            template: listLayout,
            disableOrder: true
        },
        rwy: routeSegmentConfig,
        entryPoints: routeSegmentConfig,
        exitPoints: routeSegmentConfig
    }
};
