import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";

import { Employee } from "../../entity/Employee";
import { Role } from "../../entity/Role";
import { Student } from "../../entity/Student";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayLoad.userId;

    const sturole = res.locals.jwtPayLoad.role;


    if (sturole=="STUDENT"){
      // const studentRepo = AppDataSource.getMongoRepository(Student);
      // const student = await studentRepo.findOne(id);
      if (roles.indexOf(sturole) > -1) 
      {
        next();
      }    
      
    }
    else {
      const userRepository = AppDataSource.getMongoRepository(Employee);

      const user : any = await userRepository.findOneOrFail(id)

      const role : any = await user.role

      if (roles.indexOf(role)> -1){

        next();
      }
      else{
        res.status(401).send({
          message:'Unauthorised'
        });
      }
      
    }
 
    
  };
};