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

  public async create(email: string, createRatingDto: CreateRatingDto) {
    const user = await this.usersService.findOneByEmailOrCreate(email)
    const newRating = this.ratingRepository.create({ ...createRatingDto, user })
    await this.ratingRepository.save(newRating)

    await this.sendNotification(email)

    return newRating
  }

  private sendNotification(email: string) {
    this.notificationService.send({
      to: email,
      from: 'notificaiton@raterapp.io',
      re: "You've been rated",
      text: `\
Hello!

You've been rated! Go to https://raterapp.io/users/email/${email}
`,
    })
  }
}
