import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await User.find(); // dùng lệnh find( trống) get all records from User
        return res.status(200).json({ message: "OK", users });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

//sử dụng các req, res, next từ express js
export const userSignUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        //user sign up config
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email: email }); //so sánh với các email đã có trong User
        if (existingUser) return res.status(401).send("User already register");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        //create token và lưu cookies
        //xử lí xóa cookies khi user log out
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        //create token when login success
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        //để send cookies trực tiếp from be to fe
        //sử dụng => cookies parser
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });

        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

export const userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        //user token check expire
        const { email, password } = req.body;
        const user = await User.findOne({ email }); //get User by email

        if (!user) {
            return res.status(401).send("User not register");
        }
        const isPasswordCorrect = await compare(password, user.password); //so sánh vs pass của user này trong User
        if (!isPasswordCorrect) {
            return res.status(403).send("Password incorrect");
        }

        //xử lí xóa cookies khi user log out
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        //create & store token when login success
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        //để send cookies trực tiếp from be to fe
        //sử dụng => cookies parser
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });

        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

export const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await User.findById(res.locals.jwtData.id); //get User by id

        if (!user) {
            return res
                .status(401)
                .send("User not registed OR token mailfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);

        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        //check if user is active
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

export const userLogout = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await User.findById(res.locals.jwtData.id); //get User by id

        if (!user) {
            return res
                .status(401)
                .send("User not registed OR token mailfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);

        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }

        //xử lí xóa cookies khi user log out
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        //check if user is active
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
