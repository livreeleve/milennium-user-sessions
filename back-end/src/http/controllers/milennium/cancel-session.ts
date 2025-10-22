import { makeCancelSession } from '@/use-cases/factories/milennium/make-cancel-session'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function cancelSession(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/cancel-session',
    {
      schema: {
        tags: ['Session'],
        summary: 'Cancel session user from milennium',
        querystring: z.object({
          sessionkey: z.string(),
        }),
      },
    },
    async (request, reply) => {
      try {
        const { sessionkey } = request.query
        const cancelSessionuseCase = makeCancelSession()

        await cancelSessionuseCase.execute({ sessionkey })

        return reply
          .status(200)
          .send({ message: 'User logged out successfully.' })
      } catch (err) {
        if (err instanceof Error) {
          return reply.status(400).send('Error to logged out user')
        }

        throw err
      }
    },
  )
}
