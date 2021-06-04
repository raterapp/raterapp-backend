import { IsPhoneNumber } from 'class-validator';

export default class GetUserQuery {
  @IsPhoneNumber()
  phone: string;
}
