import express from "express";
import { checkJwt } from "../checkJWT";
import { checkRole } from "../checkRole";

import stu_controller from "./students_controller";

const router = express.Router();

router.get('/students',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN","STUDENT"])], stu_controller.getStudents);

router.get('/studentid/:id',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])] ,stu_controller.getStudentid);

router.get('/studentdept/:dept',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN","STUDENT"])] ,stu_controller.getStudentdept);

router.post('/addstudent',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])], stu_controller.createStudent);

router.put('/updatestudent',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])], stu_controller.updateStudent);

router.delete('/deletestudent/:id', [checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])],stu_controller.deleteStudent);


export = router;