const { pool } = require('../lib/utils/connect');
const app = require('../lib/app');
const request = require('supertest');

describe('routes', () => {
  it('gets all characters', () => {
    pool.connect();
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toHaveLength(465);
      });
  });

  it('gets characters by category', () => {
    pool.connect();
    return request(app)
      .get('/category/Criminals')
      .then(res => {
        expect(res.body).toHaveLength(70);
      });
  });
});