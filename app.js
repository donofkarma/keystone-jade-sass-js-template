var keystone = require('keystone');

require('dotenv').load();

keystone.init({

    'name': 'Keystone Test',

    'favicon': 'public/assets/images/favicon.ico',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/keystone-jade-sass-js-template',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET || 'keystone-jade-sass-js-template'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
