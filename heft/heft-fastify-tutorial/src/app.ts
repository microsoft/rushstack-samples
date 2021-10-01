import * as path from 'path';
import * as ejs from 'ejs';
import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import PointOfView from 'point-of-view';
import FastifyStatic from 'fastify-static';

import { HomeController } from './web/HomeController';
import { BooksController } from './web/books/BooksController';
import { ApiBooksController } from './api/books/ApiBooksController';

const app: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  // Register plugins
  await fastify.register(PointOfView, {
    engine: {
      ejs: ejs
    },
    layout: 'layouts/global.ejs',
    root: path.join(__dirname, './web')
  });
  await fastify.register(FastifyStatic, {
    root: path.join(__dirname, './assets'),
    prefix: '/assets'
  });

  // Application routes, organized into small "controllers"
  await fastify.register(HomeController.register, { prefix: '/' });
  await fastify.register(BooksController.register, { prefix: '/books' });
  await fastify.register(ApiBooksController.register, { prefix: '/api/books' });
};

export default app;
