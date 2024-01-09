export class ResponseDTO {
  message: string = '';
  statusCode: number = 0;
}

export enum ResponseType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  FAVORITE = 'FAVORITE',
}
