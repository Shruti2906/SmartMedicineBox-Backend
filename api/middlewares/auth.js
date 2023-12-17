const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants");

const auth = (req, res, next) => {
  console.log("first ");
  try {
    let token = req.headers.authorization;
    console.log(req.headers);
    console.log(req.headers.authorization);
    if (token) {
      console.log("second");
      let user = jwt.verify(token, JWT_SECRET);
      req.userId = user.userId;
      console.log(req.userId);
      next();
    } else {
      console.log("error : ", token);
      res.status(401).json({
        message: "Unauthorized User",
      });
    }
  } catch (error) {
    console.log(" error: ");
    console.log(error);
    res.status(401).send({
      message: "Unauthorized ssUser",
      error: "djhd",
    });
  }
};

module.exports = auth;
