/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'osfpages-admin',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        osfAPIUrl: 'https://staging-api.osf.io',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        firebase: {
            apiKey: 'AIzaSyDl_AFSZ10H7Wcegd0UjmGHUt26fdaWvQQ', //safe to show to public in order for them to interact with Firebase
            authDomain: 'osfpages.firebaseapp.com',
            databaseURL: 'https://osfpages.firebaseio.com',
            storageBucket: 'osfpages.appspot.com',
        }

    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.locationType = 'hash';
        ENV.rootURL = '/osfpages/';

    }

    if (process.env.BACKEND === 'stage') {
        ENV.osfHostUrl = 'https://api.osf.io';
    }


    return ENV;
};