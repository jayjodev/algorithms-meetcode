const request = require('supertest');
require('dotenv').config()

const shopThing_Backend = process.env.BACKEND_SERVER_TEST || "http://localhost:3001";

const data = {
  "number": 18
}

/**
 *  Algorithm APIs TEST
 */

describe('Calculate median prime number', function () {
  it('Successfully Calculate median prime number', done => {
    request(shopThing_Backend)
      .post('/algorithm/median-prime-number')
      .send(data)
      .expect(200)
      // Check three Keys
      .expect(function (res) {
        if (!('userInput' in res.body)) throw new Error("Missing userInPut key")
        if (!('primes' in res.body)) throw new Error("Missing primes key")
        if (!('medianPrime' in res.body)) throw new Error("Missing medianPrime key")
      })
      .end(async function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});