import {
  Inject,
  Injectable,
  Logger,
  LoggerService,
  Scope,
} from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT }) // 해당 서비스를 일시적으로 만들며, 각 의존성 주입마다 새로운 인스턴스가 생성
export class CustomLoggerService implements LoggerService {
  private target: string; // 로깅 대상(컨텍스트)를 담을 변수 선언
  constructor(@Inject(Logger) private readonly logger: LoggerService) {
    // 기본 로거 주입 초기화
    this.setTarget(this.constructor.name);
  }

  setTarget(target: string) {
    this.target = target;
  }

  log(message: unknown) {
    const input =
      typeof message === 'string' || typeof message === 'number'
        ? message
        : JSON.stringify(message);
    this.logger.log(input, this.target);
    // LOG [CustomLoggerService] {"productName":"zzz","price":1000} 식으로 출력
  }
  error(message: unknown) {
    const input =
      typeof message === 'string' || typeof message === 'number'
        ? message
        : JSON.stringify(message);

    this.logger.error(input, this.target);
  }

  warn(message: unknown) {
    const input =
      typeof message === 'string' || typeof message === 'number'
        ? message
        : JSON.stringify(message);

    this.logger.warn(input, this.target);
  }
}
