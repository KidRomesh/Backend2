import express from "express";
import { checkJwt } from "../../middlewares/checkJwt";
import { checkRole } from "../../middlewares/checkRole";

import task_controller from "./task_controller";

const router = express.Router();


router.post('/createtask',[checkJwt, checkRole(["DEAN","HOD","FACULTY","ADMIN"])], task_controller.createTask);

router.get('/gettasks',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], task_controller.getTask);

router.get('/gettskstud/:name', [checkJwt, checkRole(["DEAN","HOD","ADMIN"])], task_controller.getTaskper);

router.get('/getcount/:name', [checkJwt], task_controller.getcount)


export = router;