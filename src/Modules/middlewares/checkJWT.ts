import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {

  let jwtpayload;

  try {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      const secret = config.jwtSecret

      if (token) {
        return jwt.verify(token, secret, (err, decoded) => {
          if (err) {
            console.log(err.message)
            return res.json({
              success: false,
              message: "Failed to authenticate token.",
            });
          }
          else {
            
            jwtpayload = decoded;
            
            res.locals.jwtPayLoad = jwtpayload
            
            // console.log(jwtpayload)
            
            return next();
          }
        })
      } else {
        res.status(403).send('No Token Provided')
      }
    }
  } catch (err) {
    console.log(err.message)
  }

}