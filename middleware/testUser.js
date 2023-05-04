const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test Users can only read data");
    next();
  }
};

module.exports = testUser;
