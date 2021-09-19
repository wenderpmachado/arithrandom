import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import { Event } from './event';
import logger from './utils/logger';
import broadcastMessage from './utils/boardcast-message';
import cors from 'cors';

dotenvConfig();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const events: Event<any>[] = [];

app.post('/events', (req, res) => {
  const { topic, data } = req.body as Event<any>;

  const event = new Event(topic, data);

  logger.info(JSON.stringify(event));

  events.push(event);

  logger.info(`Events: ${JSON.stringify(events)}`)

  broadcastMessage(event);

  const { eventId } = event.data;

  res.send({
    status: StatusCodes.OK,
    eventId
  });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(process.env.PORT, () => {
  logger.info(`Listening on ${process.env.PORT}`);
  logger.info(`Events: ${JSON.stringify(events)}`)
});
