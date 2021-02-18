const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

module.exports = function CommonMiddleware(app) {
    app.use(bodyParser.json());
    app.use(morgan("common", { skip: (_req, _res) => process.env.NODE_ENV === 'test' }));
    app.use(cors());
    app.use(helmet());
}