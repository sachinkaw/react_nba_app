'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const jest = require('jest');
const argv = process.argv.slice(2);

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}


jest.run(argv);
