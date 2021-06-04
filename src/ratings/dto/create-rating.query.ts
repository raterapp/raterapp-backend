import { IsPhoneNumber } from 'class-validator';

export default class CreateRatingQuery {
  @IsPhoneNumber()
  phone: string;
}
