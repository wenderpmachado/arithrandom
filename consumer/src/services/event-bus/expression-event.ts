import { IEvent } from "./event";

export interface IExpression {
  equation?: string;
  result?: number;
  eventId?: string;
}

export interface IExpressionEvent extends IEvent<IExpression> {}
