import { makeGetSession } from '@/use-cases/factories/milennium/make-get-session'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getSession(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/get-sessions',
    {
      schema: {
        tags: ['Session'],
        summary: 'Get session from milennium',
      },
    },
    async (_, reply) => {
      try {
        const getSessionUseCase = makeGetSession()

        const { data } = await getSessionUseCase.execute()

        return reply.status(200).send(data)
      } catch (err) {
        if (err instanceof Error) {
          return reply.status(400).send({ message: err.message })
        }

        throw err
      }
    },
  )
}
