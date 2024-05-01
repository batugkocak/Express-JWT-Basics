const CustomApiError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class Unauthenticated extends CustomApiError {
  constructor(message, statusCode) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
module.exports = Unauthenticated;
