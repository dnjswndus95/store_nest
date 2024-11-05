type ApplicationExceptionRecordValue = {
  message: string;
};

type ApplicationExceptionRecord = Record<
  ApplicationExceptionCode,
  ApplicationExceptionRecordValue
>;

export enum ApplicationExceptionCode {
  /** 유효하지 않은 파라미터 */
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  /** 존재하지 않는 값 */
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  /** 사용불가능한 상태  */
  CONFLICT_STATUS = 'CONFLICT_STATUS',
  /** 서버 오류 */
  RUNTIME_ERROR = 'RUNTIME_ERROR',
}

export const ApplicationExceptionRecord: ApplicationExceptionRecord = {
  [ApplicationExceptionCode.INVALID_PARAMETER]: {
    message: '잘못된 파라미터입니다.',
  },

  [ApplicationExceptionCode.RESOURCE_NOT_FOUND]: {
    message: '리소스가 존재하지 않습니다.',
  },

  [ApplicationExceptionCode.CONFLICT_STATUS]: {
    message: '사용 불가능한 상태입니다.',
  },

  [ApplicationExceptionCode.RUNTIME_ERROR]: {
    message: 'Runtime Error입니다.',
  },
} as const;

/**
 * as const의 역할
 * 1. 타입을 리터럴로 고정 : as const를 사용하면 해당 객체나 배열의 속성 타입을 리터럴 타입으로 고정한다.
 */

/**
 * ExceptionCode를 RESOURCE_NOT_FOUND 처럼 일괄적으로 묶어서 내리는것이 좋은가
 * A가 존재하지 않습니다. B가 존재하지 않습니다. 처럼 데이터 별로 Code를 정의하는 것이 좋은가
 *
 * 일괄적 방식은
 *  1. Code 정의가 간단하고 코드가 간결해진다.
 *  2. 디버깅에 어려움이 있다.
 *
 *  Code를 세분화 하는 방식은
 *    1. Code 정의가 복잡하고 여러가지 리소스가 없는 경우 혼돈을 야기할 수 있다.
 *    2. 디버깅 추적이 쉽다.
 */
