import fastify from 'fastify';
import app from '../../app';

describe('HomeController', () => {
  describe('index', () => {
    it('renders an HTML index page', async () => {
      const subject = fastify().register(app);
      const response = await subject.inject({
        method: 'GET',
        url: '/'
      });

      expect(response.statusCode).toEqual(200);
      expect(response.body).toMatchSnapshot();
    });
  });
});
