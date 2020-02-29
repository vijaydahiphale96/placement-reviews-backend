export class BaseResponse {
  hasError: boolean = false;
  error: CustomError = new CustomError();
  data: any = {};
}

export class CustomError {
  code: number = 0;
  title: string = '';
  message: string = '';
}
