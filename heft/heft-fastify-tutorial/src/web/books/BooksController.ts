import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Book } from '../../model/Book';

export class BooksController {
  public static async register(fastify: FastifyInstance) {
    fastify.get('/', BooksController.list);
    // fastify.get('/:id', BooksController.view);
    // fastify.post('/', BooksController.create);
    // fastify.put('/:id', BooksController.update);
    // fastify.delete('/:id', BooksController.delete);
  }

  public static async list(request: FastifyRequest, reply: FastifyReply) {
    return reply.view('books/list', {
      books: Book.list()
    });
  }

  // public static async view(request: FastifyRequest, reply: FastifyReply) {
  // }

  // public static async create(request: FastifyRequest, reply: FastifyReply) {
  // }

  // public static async update(request: FastifyRequest, reply: FastifyReply) {
  // }

  // public static async delete(request: FastifyRequest, reply: FastifyReply) {
  // }
}
