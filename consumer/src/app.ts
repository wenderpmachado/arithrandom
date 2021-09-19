import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import './config';
import { EventBusService } from './services/event-bus/event-bus.service';
import { ComputeService } from "./services/compute/compute.service";
import logger from "./utils/logger";

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

const computeService = new ComputeService();
const eventBusService = new EventBusService(computeService);
app.use('/events', eventBusService);
app.use(express.errorHandler());

app.listen(process.env.PORT).on('listening', () => {
  logger.info(`Server listening on localhost:${process.env.PORT}`)
  logger.info(`Handling missing events...`)
  eventBusService.handleMissingEvents();
});
