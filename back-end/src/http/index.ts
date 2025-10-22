import { FastifyInstance } from 'fastify'
import { getSession } from './controllers/milennium/get-session'
import { cancelSession } from './controllers/milennium/cancel-session'

export async function routes(app: FastifyInstance) {
  app.register(getSession)
  app.register(cancelSession)
}
