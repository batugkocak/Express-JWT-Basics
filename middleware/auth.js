const CustomAPIError = require("../errors/custom-error");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Error!");
    throw new CustomAPIError("No token provided!", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id, username } = decoded;
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route!", 401);
  }

  next();
};
module.exports = authenticationMiddleware;
