import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test basic endpoint response', () => {
  it('should give statut 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
