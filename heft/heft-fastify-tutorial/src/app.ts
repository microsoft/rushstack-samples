import * as path from 'path';
import * as ejs from 'ejs';
import PointOfView from 'point-of-view';
import FastifyStatic from 'fastify-static';
import {
  FastifyPluginAsync,
  FastifyPluginOptions,
  FastifyInstance,
  FastifyRequest,
  FastifyReply
} from 'fastify';

import { BooksController } from './web/books/BooksController';
import { ApiBooksController } from './api/books/ApiBooksController';

const app: FastifyPluginAsync = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
  // Register plugins
  await fastify.register(PointOfView, {
    engine: {
      ejs: ejs
    },
    layout: 'layouts/global.ejs',
    root: path.join(__dirname, './web')
  });
  fastify.register(FastifyStatic, {
    root: path.join(__dirname, './assets'),
    prefix: '/assets'
  });

  // Application routes, organized into small "controllers"
  fastify.register(BooksController.register, { prefix: '/books' });
  fastify.register(ApiBooksController.register, { prefix: '/api/books' });
};

export default app;
