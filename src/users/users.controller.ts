import { Controller, Get, Query } from '@nestjs/common';
import GetUserQuery from './dto/get-user.query';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('phone')
  findOne(@Query() query: GetUserQuery) {
    return this.usersService.findOneByPhoneNumber(query.phone);
  }
}
