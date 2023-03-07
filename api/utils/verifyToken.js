import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res,  () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
     next();
    } else {
  return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,  () => {
    if (req.user.isAdmin) {
    next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};



export const currentUser = (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

  // decode token
  if (token) {

    var hash = config.secret.replace(/^\$2y(.+)$/i, '\$2a$1');
    // verifies secret
    jwt.verify(token, hash, function (err, decoded) {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        wpUserModel.getUserInformationById(req.decoded.id, function (err, user) {
          req.currentUser = user;
          next();
        });
      }
    });
  } else {
    // if there is no token

    return res.status(403).json({
      message: 'Invalid token'
    });
  }

}