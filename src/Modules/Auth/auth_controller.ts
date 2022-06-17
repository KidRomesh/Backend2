import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";


import { Employee } from "../../entity/Employee";
import { Student } from "../../entity/Student";
import config from "../../config/config";
import { AppDataSource } from "../../data-source";
import { Gender } from "../../entity/Gender";
import { Bg } from "../../entity/Bg";

class AuthController {

  static login = async (req: Request, res: Response,) => {

    try {
      const userRepository = AppDataSource.getRepository(Employee)

      const authHeader = req.headers.authorization;

      const userName = req.body.userName
      const password = req.body.Password

      if (authHeader)
        if (!(userName && password)) {
          res.status(400).send("All field is required")
        }
      const user = await userRepository.findOneBy({ userName })
      if (!user) {
        res.status(400).send("No user Found Kindly check Credentials")
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, agree) {
          if (err) {
            console.log(err)
          }
          if (agree) {
            const token = jwt.sign(
              { userId: user.id, username: user.userName },
              config.jwtSecret,
              { expiresIn: "1h" }
            );

            // console.log(token)

            res.send({
              token: token
            }
            )


          }
        });
      }
    } catch (err) {
      console.log(err)
    }
  };

  static signin = async (req: Request, res: Response,) => {

    try {
      const studentRepository = AppDataSource.getRepository(Student)

      const authHeader = req.headers.authorization;

      const userName = req.body.userName
      const password = req.body.Password

      if (authHeader)
        if (!(userName && password)) {
          res.status(400).send("All field is required")
        }
      const user = await studentRepository.findOneBy({ userName })
      if (!user) {
        res.status(400).send("No user Found Kindly check Credentials")
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, agree) {
          if (err) {
            console.log(err)
          }
          if (agree) {
            const token = jwt.sign(
              { userId: user.id, username: user.userName, role : user.role },
              config.jwtSecret,
              { expiresIn: "1h" }
            );

            // console.log(token)

            res.send({
              token: token
            }
            )


          }
        });
      }
    } catch (err) {
      console.log(err)
    }
  };

  static getEmp= async (req: Request, res: Response, next: NextFunction) => {

    const empRepo = AppDataSource.getMongoRepository(Employee);
    const studentRepo = AppDataSource.getMongoRepository(Student);


    const role = res.locals.jwtPayLoad.role
    const id = res.locals.jwtPayLoad.userId
    console.log(role);

    if(role == "STUDENT"){

        const student = await studentRepo.findOne(id)
        res.send({
            name: student.firstName
        })

    }else{
        const emp = await empRepo.findOne(id)
        res.send({
            name : emp.firstName
        })
    }

    

    
}



  static getGender = async (req: Request, res: Response, next: NextFunction) => {

    const genderRepo = await AppDataSource.getMongoRepository(Gender)
    const gender = await genderRepo.find()
    if (gender == null) {
      res.send({
        message: 'no gender data available'
      })

    }
    else {
      // console.log(gender);
      res.status(200).send(
        gender
      )
    }

  };

  static getBg = async (req: Request, res: Response, next: NextFunction) => {

    const bgRepo = await AppDataSource.getMongoRepository(Bg)
    const bg = await bgRepo.find()
    if (bg == null) {
      res.send({
        message: 'no gender data available'
      })

    }
    else {
      // console.log(bg);
      res.status(200).send(
        bg
      )
    }

  };

  





}
export default AuthController;