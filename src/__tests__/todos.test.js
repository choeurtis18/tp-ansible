const request = require('supertest');
const app = require('../app');

describe('GET /todos', () => {
    it('should return empty list', async () => {
        const response = await request(app).get('/todos');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});
