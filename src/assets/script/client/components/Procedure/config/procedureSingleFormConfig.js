import {
    listLayout,
    routeSegmentLayout,
    routeSegmentWaypointLayout,
    waypointRestrictionLayout
} from '../../../lib/Form/template';

const routeSegmentConfig = {
    template: listLayout,
    config: {
        striped: true,
        divided: true
    },
    item: {
        template: routeSegmentLayout,
        fields: {
            waypoints: {
                template: listLayout,
                config: {
                    striped: true,
                    divided: false,
                    hideLegend: true
                },
                item: {
                    template: routeSegmentWaypointLayout,
                    fields: {
                        restrictions: {
                            template: waypointRestrictionLayout
                        }
                    }
                }
            }
        }
    }
};

export const FORM_CONFIG = {
    fields: {
        draw: {
            template: listLayout
        },
        body: {
            template: listLayout
        },
        rwy: routeSegmentConfig,
        entryPoints: routeSegmentConfig,
        exitPoints: routeSegmentConfig
    }
};
