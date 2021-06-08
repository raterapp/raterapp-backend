import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common'
import { Response } from 'express'
import { EntityNotFoundError } from 'typeorm'

@Catch(EntityNotFoundError, Error)
export default class NotFoundExceptionFilter implements ExceptionFilter {
  constructor(private readonly message = 'Not Found') {}

  public catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    response.status(404).json({ statusCode: 404, message: this.message })
  }
}
