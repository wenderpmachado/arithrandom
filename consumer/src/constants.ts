export const EVENT_TOPICS = {
  EXPRESSION_CREATED: 'expression:created' as TEventTopics,
  EXPRESSION_UPDATED: 'expression:updated' as TEventTopics,
  EXPRESSION_COMPUTED: 'expression:computed' as TEventTopics,
}

export type TEventTopics = 'expression:created' | 'expression:updated' | 'expression:computed';
