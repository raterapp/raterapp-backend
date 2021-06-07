import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/users/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateRatingDto } from './dto/create-rating.dto'
import { Rating } from './entities/rating.entity'

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating) private ratingRepository: Repository<Rating>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  public async create(phone: string, createRatingDto: CreateRatingDto) {
    let user = await this.usersRepository.findOne({ phone })

    if (!user) {
      user = this.usersRepository.create({ phone })
      await this.usersRepository.save(user)
    }

    const newRating = this.ratingRepository.create({
      ...createRatingDto,
      user,
    })

    await this.ratingRepository.save(newRating)

    return newRating
  }
}
