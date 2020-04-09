const request = require('supertest');
const axios = require('axios');
require('dotenv').config()

const back_end = process.env.BACKEND_SERVER_TEST || "http://localhost:3001";

const defaultUser = {
    email: "jayjodev@gmail.com",
    password: 'password',
}

const token = async defaultUser => {
    try {
        const { data } = await axios({
            method: "post",
            url: `${back_end}/signin`,
            data: defaultUser,
        })
        return data.token;
    }
    catch (err) {
        console.log(err.response.data);
    }
};

/**
 *  requireAuth APIs TEST
 */

// requireAuth  APIs
describe('Check requireAuth', function () {
    it('Successfully checked requireAuth APIs', async done => {
        request(back_end)
            .get('/')
            .set({ Authorization: await token(defaultUser) })
            .expect(200)
            .end(async function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});