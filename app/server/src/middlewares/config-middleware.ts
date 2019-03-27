import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv"; //TODO: Remove for prod
const configed = dotenv.config();

export function configureMiddleware(app): void {

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}
