import { DynamicModule, Module, Logger as NestLogger } from '@nestjs/common';
import { CustomLoggerService } from './custom-logger.service';

// 정적 설정이 아닌
// 동적 모듈로 설정하기 때문에 @Module 내부가 비어있다.
@Module({})
export class CustomLoggerModule {
  static forRoot(): DynamicModule {
    return {
      global: true, // 전역 모듈 여부
      module: CustomLoggerModule, // 현재 정의된 클래스를 모듈로 설정
      providers: [CustomLoggerService, NestLogger], // 이 모듈이 제공하는 프로바이더 목록 / DI 목록이라고 생각하면 된다.
      exports: [CustomLoggerService], // 이 모듈에서 외부로 내보내는 프로바이더 목록이다.
    };
  }
}
