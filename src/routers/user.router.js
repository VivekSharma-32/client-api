const express = require("express");

const router = express.Router();

const { insertUser } = require("../model/user/User.model");
const { hashPassword } = require("../helpers/bcryptHelper");

router.all("/", (req, res, next) => {
  // return res.json({
  //   message: "Get request",
  // });
  next();
});

router.post("/", async (req, res) => {
  const { name, company, address, phone, email, password } = req.body;
  try {
    // hash password
    const hashPass = await hashPassword(password);

    const newUserObj = {
      name,
      company,
      address,
      phone,
      email,
      password: hashPass,
    };
    const result = await insertUser(newUserObj);
    res.json({
      message: "New user created.",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;
