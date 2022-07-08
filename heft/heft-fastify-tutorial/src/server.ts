import fastify from 'fastify';
import { FastifyInstance } from 'fastify';
import app from './app';

/* istanbul ignore file */

// This is a typescript program you control, so you can add as many
// variables, options, etc. as you need.
//
// For this example we'll keep it simple and avoid any argument processing.
const port: number = Number(process.env.PORT) || 3000;
const host: string = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';
const logfile: string = process.env.NODE_ENV === 'production' ? '/var/log/fastify.log' : 'fastify.log';

const instance: FastifyInstance = fastify({
  logger: {
    level: 'info',
    file: logfile
  }
});

async function start(): Promise<void> {
  await instance.register(app);
  await instance.listen(port, host);
}

start().catch((error) => {
  instance.log.error(error);
  process.exit(1);
});
