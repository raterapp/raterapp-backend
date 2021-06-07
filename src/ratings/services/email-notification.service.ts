import { Injectable } from '@nestjs/common'
import Mailgun from 'mailgun-js'
import config from 'src/config'
import { INotificationService, NotificationConfig } from './INotificationService'

@Injectable()
export default class EmailNotificationService implements INotificationService {
  private readonly mailgun = new Mailgun({
    apiKey: config.MailgunApiKey,
    domain: config.MailgunDomain,
  })

  public async send(config: NotificationConfig) {
    await this.mailgun.messages().send({
      to: config.to,
      from: config.from,
      subject: config.re,
      text: config.text,
    })
  }
}
