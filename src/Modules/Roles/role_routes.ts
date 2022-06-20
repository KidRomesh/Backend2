import express from "express";
import { checkJwt } from "../checkJWT";
import { checkRole } from "../checkRole";

import role_controller from "./role_controller";

const router = express.Router();

router.get('/roles',[checkJwt, checkRole(["DEAN","HOD","ADMIN"])], role_controller.getRole);

router.get('/rolebyid/:id',[checkJwt, checkRole(["DEAN","ADMIN"])], role_controller.getRoleid);

router.post('/createrole',[checkJwt, checkRole(["DEAN","ADMIN"])], role_controller.createRole);

router.put('/updaterole',[checkJwt, checkRole(["DEAN","ADMIN"])], role_controller.updateRole);

router.delete('/deleterole/:id',[checkJwt, checkRole(["DEAN","ADMIN"])], role_controller.deleteRole);

export = router;