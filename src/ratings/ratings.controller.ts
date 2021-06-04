import { Controller, Post, Body, Query } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import CreateRatingQuery from './dto/create-rating.query';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  create(
    @Body() createRatingDto: CreateRatingDto,
    @Query() query: CreateRatingQuery,
  ) {
    return this.ratingsService.create(query.phone, createRatingDto);
  }
}
