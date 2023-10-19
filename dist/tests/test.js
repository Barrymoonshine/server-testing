"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../routes/index"));
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', index_1.default);
test('index route works', (done) => {
    (0, supertest_1.default)(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect({ name: 'frodo' })
        .expect(200, done);
});
test('testing route works', (done) => {
    (0, supertest_1.default)(app)
        .post('/test')
        .type('form')
        .send({ item: 'hey' })
        .then(() => {
        (0, supertest_1.default)(app)
            .get('/test')
            .expect({ array: ['hey'] }, done);
    });
});
