import { TEventTopics } from "../../constants";

export interface IEvent<T extends { eventId?: string }> {
  topic: TEventTopics,
  data: T
}
