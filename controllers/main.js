const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
require("dotenv").config();

const login = async (req, res, next) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // check in the controller
  if (!username || !password) {
    throw new BadRequest("Please provide an email and password!", 400);
  }
  const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your luck number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
