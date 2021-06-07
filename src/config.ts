import { isNil } from 'lodash'

const config = {
  DBPort: Number(process.env.DB_PORT),
  DBUserName: process.env.DB_USERNAME as string,
  DBPassword: process.env.DB_PASSWORD as string,
  DBDatabase: process.env.DB_DATABASE as string,
  DBHost: process.env.DB_HOST as string,
  MailgunApiKey: process.env.MAILGUN_API_KEY as string,
  MailgunDomain: process.env.MAILGUN_DOMAIN as string,
}

if (Object.values(config).some(isNil)) {
  throw new Error(`Some of config values were not specified: \n${JSON.stringify(config)}`)
}

export default config
