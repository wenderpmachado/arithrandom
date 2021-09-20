import { Params } from "@feathersjs/feathers";
import computeExpression from "./compute-expression";
import { IExpression, IExpressionEvent } from "../event-bus/expression-event";
import { EventBusService } from "../event-bus/event-bus.service";
import { EVENT_TOPICS } from "../../constants";
import { isEmpty } from "lodash";

export class ComputeService {
  private eventBusService: EventBusService;

  constructor() {
    this.eventBusService = new EventBusService(this);
  }

  async computeExpression(expressionEvent: IExpression): Promise<IExpression> {
    const { equation, eventId } = expressionEvent;

    if (!equation || isEmpty(equation)) {
      throw new Error('Equation is empty');
    }

    const result = computeExpression(equation);

    const message: IExpression = {
      eventId,
      result
    }

    await this.eventBusService.sendMessage(EVENT_TOPICS.EXPRESSION_COMPUTED, message);

    return message;
  }
}
