export type NotificationConfig = {
  text: string
  re?: string
  from?: string
  to: string
}

export interface INotificationService {
  send(notificationConfig: NotificationConfig): Promise<void>
}
