import express from "express";
import cors from "cors";
import { signup, login,logoutUser } from "../controllers/authController.js";
//import login from "../Controllers/AuthController.js";

//import { test } from "../Controllers/AuthController.js";

const router = express.Router();

router.use(cors({ credentials: true, origin: "*" }));

//router.get("/", test);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",logoutUser)


export default router;
