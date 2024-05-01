const { Unauthenticated } = require("../errors/index");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Error!");
    throw new Unauthenticated("No token provided!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id, username } = decoded;
  } catch (error) {
    throw new Unauthenticated("Not authorized to access this route!");
  }

  next();
};
module.exports = authenticationMiddleware;
