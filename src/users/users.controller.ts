import { Controller, Get, Query, UseFilters } from '@nestjs/common'
import NotFoundExceptionFilter from 'src/common/not-found.exception-filter'
import GetUserQuery from './dto/get-user.query'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('by-email')
  @UseFilters(new NotFoundExceptionFilter('No user found by specified email'))
  findOne(@Query() query: GetUserQuery) {
    return this.usersService.findOneByEmail(query.email)
  }
}
