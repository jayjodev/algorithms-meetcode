const Authentication = require('./controllers/authentication');
const Algorithm = require('./controllers/algorithm');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({ Check: 'requireAuth' })
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

    // Add algorithms
    app.post('/algorithm/median-prime-number', Algorithm.medianPrimeNumber);
}