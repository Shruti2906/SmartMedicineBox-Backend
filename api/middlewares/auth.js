const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants");

const auth = (req, res, next) => {
  
  try {
    let token = req.headers.authorization;
    if (token) {
      let user = jwt.verify(token, JWT_SECRET);
      req.userId = user.userId;
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized User",
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(401).send({
      message: "Unauthorized ssUser",
      error: "djhd",
    });
  }
};

module.exports = auth;
