// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dasboard
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
require("dotenv").config();

const login = async (req, res, next) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // check in the controller
  if (!username || !password) {
    throw new CustomAPIError("Please provide an email and password!", 400);
  }
  const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your luck number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
