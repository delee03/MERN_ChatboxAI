import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();

//sử dụng middlewares
//sử dụng middlewares
app.use(
    cors({
        origin: ["http://localhost:5173", "https://fuderr-ai.vercel.app"],
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders:
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Use morgan for logging in development
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/v1", appRouter);
export default app;
