const appRoot = require('app-root-path');
const LOG_PATH = process.env.LOG_PATH || `${appRoot}/logs`;
const LOG_LEVEL = process.env.LOG_LEVEL;

module.exports = {
  LOG_PATH,
  LOG_LEVEL
};