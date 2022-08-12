import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export class HomeController {
  public static async register(fastify: FastifyInstance): Promise<void> {
    fastify.get('/', HomeController.index);
  }

  public static async index(request: FastifyRequest, reply: FastifyReply): Promise<unknown> {
    return reply.view('index');
  }
}
