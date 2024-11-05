import { HttpException, HttpStatus } from '@nestjs/common';
import {
  ApplicationExceptionCode,
  ApplicationExceptionRecord,
} from './exception-code';

export class CustomException extends HttpException {
  private readonly code: ApplicationExceptionCode;
  public readonly message: string;

  constructor(code: ApplicationExceptionCode, status: HttpStatus) {
    const { message } = ApplicationExceptionRecord[code];
    super({ code, message }, status);
    this.code = code;
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }

  getCode(): ApplicationExceptionCode {
    return this.code;
  }
}
