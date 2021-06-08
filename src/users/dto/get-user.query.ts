import { IsEmail } from 'class-validator'

export default class GetUserQuery {
  @IsEmail()
  email: string
}
