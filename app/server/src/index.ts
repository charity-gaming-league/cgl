import * as http from 'http';
import * as debug from 'debug';
import * as path from 'path';
import { app, server } from './ws/express-ws-s';
import * as dotenv from 'dotenv'
import * as AWS from 'aws-sdk';
import * as ejs from 'ejs';

debug('express:server');

(function start() {
  const configed = dotenv.config();
  const port = process.env.PORT || 3000;
  app.set('port', port);
  app.set('views', path.join(__dirname, '/views'));
  server.listen(port);
  console.log('Listening on port: ', port);
})();