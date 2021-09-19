import {AxiosInstance, default as Axios} from 'axios';
import { EVENT_TOPICS, TEventTopics } from '../../constants';
import logger from '../../utils/logger';
import { ComputeService } from '../compute/compute.service';
import { IExpression, IExpressionEvent } from './expression-event';

export class EventBusService {
  private axios: AxiosInstance;

  constructor(private computeService: ComputeService) {
    this.axios = Axios.create({
      baseURL: `http://${process.env.EVENT_BUS_HOST}:${process.env.EVENT_BUS_PORT}`
    })
  }

  private log(event: IExpressionEvent) {
    logger.info(JSON.stringify(event));
  }

  async sendMessage(topic: TEventTopics, data: IExpression): Promise<any> {
    const event = {topic, data};

    this.log(event);

    const result = await this.axios.post('/events', event);

    return result.data;
  }

  async handleEvent(event: IExpressionEvent) {
    const { topic, data } = event;

    switch (topic) {
      case EVENT_TOPICS.EXPRESSION_CREATED:
        this.log(event);
        this.computeService.computeExpression(data);
        break;
    }
  }

  async create(event: IExpressionEvent, params?: any) {
    this.handleEvent(event);
  }

  async handleMissingEvents() {
    try {
      const events = await this.axios.get<IExpressionEvent[]>('/events');

      for (let event of events.data) {
        // TODO: add verification if the event was processed
        this.handleEvent(event);
      }
    } catch (error: any) {
      logger.error(error.message);
    }
  }
}
