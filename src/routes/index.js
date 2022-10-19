const { Router } = require("express");
const Crypto = require("../models/Crypto");

const router = new Router();

router.get("/", (req, res) => {
  Crypto.create({
    name: "bitcoin",
    short: "btc",
    valueUSD: 3,
  });
  res.send("hola");
});

router.get("/todo", (req, res) => {
  Crypto.findAll().then((cryptos) => {
    res.json(cryptos);
  });
});

module.exports = router;
