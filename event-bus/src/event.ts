import { v4 as uuid } from 'uuid';

export class Event<T extends {eventId: string}> {
  constructor(
    public topic: string,
    public data: T,
  ) {
    const { eventId } = data;

    this.data = {
      ...data,
      eventId: eventId || uuid()
    }
  }
}
