import { Module } from '@nestjs/common'
import { RatingsService } from './services/ratings.service'
import { RatingsController } from './ratings.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Rating } from './entities/rating.entity'
import { UsersModule } from 'src/users/users.module'
import EmailNotificationService from './services/email-notification.service'

@Module({
  imports: [TypeOrmModule.forFeature([Rating]), UsersModule],
  controllers: [RatingsController],
  providers: [
    RatingsService,
    { provide: 'NotificationService', useClass: EmailNotificationService },
  ],
})
export class RatingsModule {}
