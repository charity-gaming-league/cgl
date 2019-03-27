import * as express from 'express';
import { configureRoutes } from './routes/configure-routes';
import { configureMiddleware } from './middlewares/config-middleware';

export function getExpressApp(): express.Application {
    const app: express.Application = express();
    configureMiddleware(app);
    configureRoutes(app);
    return app;
}