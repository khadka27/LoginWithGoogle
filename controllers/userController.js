// controllers/userController.js
const loadAuth = (req, res) => {
    res.render('auth'); // Render your auth view
};

const success = (req, res) => {
    if (!req.user) {
        console.log('User is not logged in');
        return res.redirect('/failure');
    }

    console.log('User:', req.user);
    res.render('success', {
        name: req.user.displayName,
        email: req.user.emails[0].value,
        photo: req.user.photos[0].value
    });
};

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/');
    });
};

const failure = (req, res) => {
    res.render('failure', { message: 'You are not logged in' });
};

module.exports = {
    loadAuth,
    success,
    logout,
    failure
};
