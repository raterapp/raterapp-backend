import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  public findOneByPhoneNumber(phone: string) {
    return this.userRepository.findOne({
      where: { phone },
      relations: ['ratings'],
    })
  }

  public async findOneByPhoneNumberOrCreate(phone: string): Promise<User> {
    const user = await this.userRepository.findOne({ phone })

    if (user) {
      return user
    }

    const newUser = this.userRepository.create({ phone })
    await this.userRepository.save(newUser)

    return newUser
  }
}
