import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import { createConnection } from 'typeorm';
import './config';
import * as ormConfig from './database/ormconfig';
import { EventBusService } from './services/event-bus/event-bus.service';
import { Expression } from './services/expression/expression.entity';
import { ExpressionsService } from "./services/expression/expressions.service";
import logger from "./utils/logger";
import cors from 'cors';

const app = express(feathers());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

const expressionsService = new ExpressionsService();
app.use('/expressions', expressionsService);
app.use('/events', new EventBusService<Expression>(expressionsService));
app.use(express.errorHandler());

// TODO: Finish TypeORM implementation with Postgres
// createConnection(ormConfig).then(connection => {
  app.listen(process.env.PORT).on('listening', () =>
    logger.info(`Server listening on localhost:${process.env.PORT}`)
  );
// });
