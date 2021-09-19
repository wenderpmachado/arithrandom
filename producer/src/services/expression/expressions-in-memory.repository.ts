// import { v4 as uuid } from 'uuid';
import { isEmpty } from 'lodash';
import logger from '../../utils/logger';
import { Expression } from "./expression.entity";

export class ExpressionsInMemoryRepository {
  private counter: number;
  private expressions: Expression[];

  constructor() {
    this.counter = 1;
    this.expressions = [];
  }

  async create({ equation }: Partial<Expression>): Promise<Expression> {
    if (!equation || isEmpty(equation)) {
      throw new Error('Equation is empty');
    }

    const expression: Expression = {
      id: this.counter,
      equation
    };

    this.expressions.push(expression);
    this.counter++;

    return Promise.resolve(expression);
  }

  async update({ id, eventId }: Partial<Expression>, expression: Partial<Expression>): Promise<Expression> {
    if (!id && !eventId) {
      throw new Error('ID is empty');
    }

    let updatedExpresson = {} as Expression;

    this.expressions = this.expressions.map((e) => {
      if (e.id === id || e.eventId === eventId) {
        updatedExpresson = {
          ...e,
          ...expression,
          eventId
        }

        return updatedExpresson
      }

      return e;
    });

    logger.info(`expressions: ${JSON.stringify(this.expressions)}`)

    return Promise.resolve(updatedExpresson);
  }
}
