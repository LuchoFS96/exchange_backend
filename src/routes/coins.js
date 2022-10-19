require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const API_URL = process.env.API_URL;
const API_USD_URL = process.env.API_USD_URL;
const combine = require("../controller/combine.js");
const Crypto = require("../models/Crypto");

router.get("/", async (req, res, next) => {
  const OBJ_SHORT_NAME = await axios.get(API_URL);
  const USD = await axios.get(API_USD_URL);
  const finalArray = combine(OBJ_SHORT_NAME, USD);
  for (let i = 0; i < finalArray.length; i++) {
    await Crypto.create({
      name: finalArray[i][1],
      short: finalArray[i][0],
      valueUSD: parseInt(finalArray[i][2]),
    });
  }
  // console.log(finalArray);

  // await Crypto.create({
  //   name: "hola",
  //   short: "noalns",
  //   valueUSD: 321,
  // });
  res.status(200).send(finalArray);
});

module.exports = router;
