const request = require('supertest');
const axios = require('axios');
require('dotenv').config()

const shopThing_Backend = process.env.BACKEND_SERVER_TEST || "http://localhost:3001";

const defaultUser = {
    email: "shopthing@shopthing.com",
    password: 'password',
}

const token = async defaultUser => {
    try {
        const { data } = await axios({
            method: "post",
            url: `${shopThing_Backend}/signin`,
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
        request(shopThing_Backend)
            .get('/')
            .set({ Authorization: await token(defaultUser) })
            .expect(200)
            .end(async function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});