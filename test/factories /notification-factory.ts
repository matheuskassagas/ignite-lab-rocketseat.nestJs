import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationsProps,
} from '@application/entities/notification';

type Override = Partial<NotificationsProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitacao de amizade'),
    recipientId: 'recipient-2',
    ...override,
  });
}
