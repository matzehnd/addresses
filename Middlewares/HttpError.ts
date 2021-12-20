export class HttpError extends Error {
  constructor(public code: number = 500, message?: string) {
    super(message);
  }
}
