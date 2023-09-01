export class HttpRes {
  statusCode: StatusCode;
  message: string;

  constructor(statusCode: StatusCode, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export enum StatusCode {
  OK = 200,
  NotFound = 404,
  BadRequest = 400,
  MethodNotAllowed = 405,
  ServerError = 500,
  // Add more status codes as needed
}
