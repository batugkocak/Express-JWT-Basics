// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dasboard

const login = async (req, res, next) => {
  res.send("Fake Login Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your luck number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
