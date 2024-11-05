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
