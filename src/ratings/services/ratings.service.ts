import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersService } from 'src/users/users.service'
import { Repository } from 'typeorm'
import { CreateRatingDto } from '../dto/create-rating.dto'
import { Rating } from '../entities/rating.entity'
import { INotificationService } from './INotificationService'

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,

    private readonly usersService: UsersService,

    @Inject('NotificationService')
    private readonly notificationService: INotificationService,
  ) {}

  public async create(phone: string, createRatingDto: CreateRatingDto) {
    const user = await this.usersService.findOneByPhoneNumberOrCreate(phone)

    const newRating = this.ratingRepository.create({
      ...createRatingDto,
      user,
    })

    await this.ratingRepository.save(newRating)

    return newRating
  }
}
