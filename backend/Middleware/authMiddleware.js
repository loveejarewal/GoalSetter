const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const protect = asyncHandler(async (req, res) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.aplit(" ")[1];
      // verfiy token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // get user from the token
      req.user = await User.fidById(decoded.id).select("-password");
      next()


    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error(" not authorized ");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized, no token ");
  }
});

module.exports = { protect };
