import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  public findOneByEmail(email: string) {
    return this.userRepository.findOneOrFail({
      where: { email },
      relations: ['ratings'],
    })
  }

  public async findOneByEmailOrCreate(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email })

    if (user) {
      return user
    }

    const newUser = this.userRepository.create({ email })
    await this.userRepository.save(newUser)

    return newUser
  }
}
