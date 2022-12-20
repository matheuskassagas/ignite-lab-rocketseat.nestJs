export class ErrorNotFound extends Error {
  constructor() {
    super('Id not found');
  }
}
