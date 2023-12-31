import indexRoutes from '../routes/index';
import express from 'express';
import request from 'supertest';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRoutes);

test('index route works', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ name: 'frodo' })
    .expect(200, done);
});

test('testing route works', (done) => {
  request(app)
    .post('/test')
    .type('form')
    .send({ item: 'hey' })
    .then(() => {
      request(app)
        .get('/test')
        .expect({ array: ['hey'] }, done);
    });
});
