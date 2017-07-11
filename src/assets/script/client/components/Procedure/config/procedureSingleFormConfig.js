import {
    listLayout,
    routeSegmentLayout,
    routeSegmentWaypointLayout
} from '../../../lib/Form/template';

export const FORM_CONFIG = {
    fields: {
        draw: {
            template: listLayout
        },
        body: {
            template: listLayout
        },
        rwy: {
            template: listLayout,
            item: {
                template: routeSegmentLayout,
                fields: {
                    waypoints: {
                        template: listLayout,
                        item: {
                            template: routeSegmentWaypointLayout
                        }
                    }
                }
            }
        },
        entryPoints: {
            template: listLayout,
            item: {
                template: routeSegmentLayout
            }
        },
        exitPoints: {
            template: listLayout,
            item: {
                template: routeSegmentLayout
            }
        }
    }
};
