import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RatingsModule } from './ratings/ratings.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RatingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
