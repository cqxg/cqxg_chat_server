const express = require("express");
const cors = require('cors');

const router = express.Router();

router.use(cors());

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;