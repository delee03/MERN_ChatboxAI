import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controller.js";
import {
    loginValidator,
    signupValidator,
    validate,
} from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userSignUp);

export default userRoutes;
