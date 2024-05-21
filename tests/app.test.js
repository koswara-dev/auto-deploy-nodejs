const request = require('supertest');
const app = require('../app');

// FILEPATH: /d:/workspace/react-workspace/backend/auto-deploy-nodejs/tests/app.test.js

describe('GET /', () => {
    it('should return status code 200 and "GitHub Actions with Node.js, webservice is running successfully! JuaraCoding"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('GitHub Actions with Node.js, webservice is running successfully! JuaraCoding');
    });
});