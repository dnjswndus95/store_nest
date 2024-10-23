import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class LowercasePipe implements PipeTransform {
  // PipeTransform method 상속
  // NestJs의 모든 pipe는 이 인터페이스를 구현해야 한다.
  // 그래야 요청 데이터가 들어올 때 파이프의 transform의 메서드를 통과하여 변환이 된다.
  transform(value: any, metadata: ArgumentMetadata): any {
    if (typeof value !== 'string') {
      throw new BadRequestException('Validation failed: String expected');
    }

    return value.toLowerCase();
  }
}
