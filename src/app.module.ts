import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { RatingsModule } from './ratings/ratings.module'

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RatingsModule],
})
export class AppModule {}
