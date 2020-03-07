export class BaseResponse<T> {
  hasError: boolean;
  data: T;
  error: CustomError

  constructor(hasError: boolean, data: T, error?: CustomError, ) {
    this.hasError = hasError ? hasError : false;
    this.data = data;
    this.error = error ? error : new CustomError(0, '', '');
  }
}

export class CustomError {
  code: number;
  title: string;
  message: string;

  constructor(code: number, title: string, message: string) {
    this.code = code ? code : 0;
    this.title = title ? title : '';
    this.message = message ? message : '';
  }
}
