import { IsString } from 'class-validator'

export class CreateRatingDto {
  @IsString()
  content: string
}
