const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Algorithm = require('./controllers/algorithm');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({ Check: 'requireAuth' })
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    // Add algorithm for test
    app.post('/algorithm', Algorithm.algorithm);
}