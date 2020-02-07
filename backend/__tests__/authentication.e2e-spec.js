const request = require('supertest');
require('dotenv').config()

const shopThing_Backend = process.env.TEST_API_URL || "http://localhost:3001";

const random_name = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const userInfo = {
    email: `${random_name}@gmail.com`,
    password: 'password',
}

/**
 *  Authentication APIs TEST
 */

 // Create user APIs
describe('Create account', function () {
    it('Successfully signup with token', done => {
        request(shopThing_Backend)
            .post('/signup')
            .send(userInfo)
            .expect(200)
            .expect(function (res) {
                if (!('token' in res.body)) throw new Error("Missing token")
            }).end(async function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

 // Login user APIs
describe('Login account', function () {
    it('Successfully signin with token', done => {
        request(shopThing_Backend)
            .post('/signin')
            .send(userInfo)
            .expect(200)
            .expect(function (res) {
                if (!('token' in res.body)) throw new Error("Missing token")
            }).end(async function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

