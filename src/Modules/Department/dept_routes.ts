import express from "express";
import { checkJwt } from "../checkJWT";
import { checkRole } from "../checkRole";

import dept_controller from "./dept_controller";

const router = express.Router();

router.get('/depts',[checkJwt, checkRole(["DEAN","HOD","FACULTY", "STUDENT"])], dept_controller.getDepts);

router.get('/deptbyid/:id',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])], dept_controller.getDeptid);

router.post('/createdept',[checkJwt, checkRole(["DEAN","ADMIN"])], dept_controller.createDept);

router.put('/updatedept',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], dept_controller.updateDept);

router.delete('/deletedept/:id',[checkJwt, checkRole(["DEAN","ADMIN"])], dept_controller.deleteDept);

export = router;