import {AxiosInstance, default as Axios} from 'axios';
import { EVENT_TOPICS, TEventTopics } from '../../constants';
import logger from '../../utils/logger';
import { Expression } from '../expression/expression.entity';
import { ExpressionsService } from '../expression/expressions.service';
import { IEvent } from './event';

export class EventBusService<IExpressionEvent> {
  private axios: AxiosInstance;

  constructor(private expressionsService: ExpressionsService) {
    this.axios = Axios.create({
      baseURL: `http://localhost:${process.env.EVENT_BUS_PORT}`
    })
  }

  private log(event: IEvent<IExpressionEvent>) {
    logger.info(JSON.stringify(event));
  }

  async sendMessage(topic: TEventTopics, data: IExpressionEvent): Promise<any> {
    const event = {topic, data};

    this.log(event);

    const result = await this.axios.post('/events', event);

    return result.data;
  }

  async create(event: IEvent<IExpressionEvent>, params?: any) {
    const { topic, data } = event;

    switch (topic) {
      case EVENT_TOPICS.EXPRESSION_COMPUTED:
        this.log(event);
        this.expressionsService.updateExpression(data as unknown as Expression);
        break;
    }
  }
}
