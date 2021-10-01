import fastify from 'fastify';
import app from '../../../app';
import { Book } from '../../../model/Book';

describe('ApiBooksController', () => {
  describe('list', () => {
    it('renders JSON view with a list of books', async () => {
      jest.spyOn(Book, 'list').mockReturnValue([new Book('A test book', 'A test author')]);

      const subject = fastify().register(app);
      const response = await subject.inject({
        method: 'GET',
        url: '/api/books'
      });

      expect(response.statusCode).toEqual(200);
      expect(response.body).toMatchSnapshot();
    });
  });
});
