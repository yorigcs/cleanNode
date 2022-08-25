export class ServerError extends Error {
  constructor () {
    super('An internal error occurred, try again later!')
    this.name = 'ServerError'
  }
}
