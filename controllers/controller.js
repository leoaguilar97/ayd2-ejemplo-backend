const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper").AsyncWrapper;
const _Service = require("../services/service");
const validator = require("../middleware/validator");

const Service = new _Service();

router.get("/", asyncWrapper(async (req, res) => {
    // proceso de update

    return res.send([]).sendStatus(201);
}));

router.post("/", [validator("SCHEMA")], asyncWrapper(async (req, res) => {
    // proceso de update

    return res.send({}).sendStatus(201);
}));

router.get("/:id", asyncWrapper(async (req, res) => {

    return res.send({}).sendStatus(200);
}));

router.put("/:id", [validator("SCHEMA")], asyncWrapper(async (req, res) => {

    return res.sendStatus(202);
}));

router.delete("/:id", asyncWrapper(async (req, res) => {

    // proceso de delete

    return res.sendStatus(204);
}));

module.exports = router;