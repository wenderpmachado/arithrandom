import { Params } from '@feathersjs/feathers';
import { Expression } from './expression.entity';
import { ExpressionsRepository } from './expressions.repository';
import { EventBusService } from '../event-bus/event-bus.service';
import { generateRandomAdditionEquation } from '../../utils/intex';
import { EVENT_TOPICS } from '../../constants';
import logger from '../../utils/logger';
import { ExpressionsInMemoryRepository } from './expressions-in-memory.repository';

// FIXME: something with the return of create function
// export class ExpressionsService implements Service<Expression> {
export class ExpressionsService  {
  // private expressionsRepository: ExpressionsRepository;
  private expressionsRepository: ExpressionsInMemoryRepository;
  private eventBusService: EventBusService<Expression>;

  constructor() {
    // this.expressionsRepository = new ExpressionsRepository();
    this.expressionsRepository = new ExpressionsInMemoryRepository();
    this.eventBusService = new EventBusService<Expression>(this);
  }

  async create(data: Partial<Expression>, params?: Params): Promise<Expression> {
    const equation = generateRandomAdditionEquation();

    const result = await this.expressionsRepository.create({
      equation
    });

    const { eventId } = await this.eventBusService.sendMessage(
      EVENT_TOPICS.EXPRESSION_CREATED,
      result
    );

    await this.updateExpression({
      ...result,
      eventId
    });

    return Promise.resolve(result);
  }

  async updateExpression(data: Expression, sendMessage: boolean = false) {
    const { id, eventId, ...expression } = data;

    const expressionUpdated = await this.expressionsRepository.update({ id, eventId }, expression);

    if (sendMessage) {
      await this.eventBusService.sendMessage(
        EVENT_TOPICS.EXPRESSION_UPDATED,
        data
      );
    }

    return expressionUpdated;
  }
}
