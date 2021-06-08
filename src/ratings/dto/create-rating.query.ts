import { IsEmail } from 'class-validator'

export default class CreateRatingQuery {
  @IsEmail()
  email: string
}
