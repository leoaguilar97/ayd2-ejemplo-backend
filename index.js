const express = require("express");
const Middleware = require("./middleware/middleware");
const ErrorHandlingMiddleware = require("./middleware/error-handling");
const expressWinston = require('express-winston');
const logFiles = require('./logger/logger');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT;

const createApp = () => {

    const app = express();

    Middleware(app);

    app.use(expressWinston.logger({
        transports: [
            logFiles.expressLogFile
        ]
    }));

    const Controller = require("./controllers/controller");

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('', Controller);

    app.use(expressWinston.errorLogger({
        transports: [
            logFiles.expressErrorFile
        ]
    }));

    ErrorHandlingMiddleware(app);

    return app;
};

const app = createApp();

app.listen(PORT, () => global.log.info(`Servicio http://localhost:${PORT} activo.`));

module.exports = { createApp };