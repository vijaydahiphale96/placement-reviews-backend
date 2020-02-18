// import 'reflect-metadata';
import express from 'express';
import * as bodyParser from 'body-parser';
import { Container } from 'typedi';
import { useContainer, useExpressServer } from 'routing-controllers';
import { ApiAuthorizationCheck } from './shared/middlewares/api-authorization';
import { ApiTest } from './controllers/api-test-controller';

let PORT = 4000;

const app: express.Express = express();
app.use(bodyParser.json({ limit: '15MB', type: 'application/json' }));

useContainer(Container);

useExpressServer(app, {
  cors: true,
  classTransformer: true,
  controllers: [
    ApiTest
  ],
  middlewares: [],
  errorOverridingMap: {
    NotFoundError: {
      message: 'No entity with this key was found.',
      stack: undefined
    },
    BadRequestError: {
      stack: undefined
    },
    HttpError: {
      stack: undefined
    },
    ModelValidationError: {
      stack: undefined
    },
    AuthorizationRequiredError: {
      stack: undefined
    },
    UnauthorizedError: {
      stack: undefined
    },
    ParamRequiredError: {
      stack: undefined
    }
  },
  authorizationChecker: ApiAuthorizationCheck.checkAuth
});

app.listen(PORT);
console.log(`Started Listening on Port = ${PORT}`);
