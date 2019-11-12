// require adapter
const run = require('probot-actions-adapter')

// require probot app
const app = require('./index.js')

// adapt the probot app
run(app)
