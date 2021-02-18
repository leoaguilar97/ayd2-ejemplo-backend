const ValidationError = require("./validation-error");
const AuthenticationError = require("./authentication-error");
const AccessDeniedError = require("./access-denied-error");
const NotFoundError = require('./status-errors');

module.exports = {
    AccessDeniedError,
    AuthenticationError,
    ValidationError,
    NotFoundError
}