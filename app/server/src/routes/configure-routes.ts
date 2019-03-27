import { mapValues } from 'lodash';

import { healthCheck } from './controllers/health-check';


export const ROUTES = {
    '/health-check': {
        get: healthCheck
    }
}

export function configureRoutes(app) {
    mapValues(ROUTES, (methods, route) => 
        mapValues(methods, (handler, method) => app[method](route, handler)),
    );
}