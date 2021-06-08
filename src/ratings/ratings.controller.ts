import { Controller, Post, Body, Query } from '@nestjs/common'
import { RatingsService } from './services/ratings.service'
import { CreateRatingDto } from './dto/create-rating.dto'
import CreateRatingQuery from './dto/create-rating.query'

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  public create(@Body() createRatingDto: CreateRatingDto, @Query() query: CreateRatingQuery) {
    return this.ratingsService.create(query.email, createRatingDto)
  }
}
