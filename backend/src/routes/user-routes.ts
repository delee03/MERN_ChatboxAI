import { Router } from "express";
import {
    getAllUsers,
    userLogin,
    userLogout,
    userSignUp,
    verifyUser,
} from "../controllers/user-controller.js";
import {
    loginValidator,
    signupValidator,
    validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
