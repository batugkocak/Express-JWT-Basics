const CustomApiError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends CustomApiError {
  constructor(message, statusCode) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
module.exports = BadRequest;
