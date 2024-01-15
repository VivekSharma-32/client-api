const express = require("express");

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log(name);
  return res.json({
    message: "Get request",
  });
});

module.exports = router;
