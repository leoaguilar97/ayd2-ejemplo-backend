
const { ValidationError, AuthenticationError, AccessDeniedError, NotFoundError } = require('../errors/errors');

const INTERNAL_SERVER_ERROR = { description: 'Internal Server Error', status: 500 };
const NOT_FOUND_ERROR = { description: 'Not found', status: 404 };
const FORBIDDEN = { description: 'Forbidden', status: 403 };
const UNAUTHORIZED = { description: 'Unauthorized', status: 401 };
const BAD_REQUEST = { description: 'Bad request', status: 400 };

function getErrorType(err) {
    if (err instanceof AuthenticationError) {
        return UNAUTHORIZED;
    }
    else if (err instanceof NotFoundError) {
        return NOT_FOUND_ERROR;
    }
    else if (err instanceof ValidationError) {
        return { status: 400, description: err.message };
    }
    else if (err instanceof AccessDeniedError) {
        return FORBIDDEN;
    }
    else {
        return INTERNAL_SERVER_ERROR;
    }
}

function errorHandler(err, _req, res, next) {
    const { status, description } = getErrorType(err);

    res.status(status).send({ description });

    global.log.error(err.message, status, description);

    next();
}

module.exports = function ErrorHandlingMiddleware(app) {
    app.use([errorHandler]);
}