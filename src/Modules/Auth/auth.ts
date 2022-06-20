import { Router } from "express";
import AuthController from "../../Modules/Auth/auth_controller";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Login route
router.post("/login", AuthController.login);

//student login route

router.post("/signin", AuthController.signin);


//gender route

router.get("/gender", AuthController.getGender);

//bg route

router.get("/bg", AuthController.getBg)


router.get("/name",[checkJwt] ,AuthController.getEmp)


//Change my password




export default router;