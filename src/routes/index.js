const { Router } = require("express");
// const Crypto = require("../models/Crypto");
const coinsRouter = require("./coins");

const router = Router();

router.use("/coins", coinsRouter);

module.exports = router;
