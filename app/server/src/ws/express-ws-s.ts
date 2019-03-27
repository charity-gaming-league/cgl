import * as http from 'http';
import * as path from 'path';
import * as enableWs from 'express-ws';
import { getExpressApp } from '../express-app';
export const app = getExpressApp();
export const server = http.createServer(app);
export const wsInstance = enableWs(app, server);