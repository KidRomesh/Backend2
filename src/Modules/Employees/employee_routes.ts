import express from "express";
import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";

import emp_controller from "./employee_controller";

const router = express.Router();

router.get('/employees',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])] ,emp_controller.getEmployees);


router.get('/empbyid/:id',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], emp_controller.getEmployeeid);

router.post('/addemp',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], emp_controller.createEmp);

router.put('/updateemp',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], emp_controller.updateEmployee);

router.delete('/deleteemp/:id',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], emp_controller.deleteEmployee);

export = router;