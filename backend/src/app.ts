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
        origin: 'https://fuderr-ai.vercel.app',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        allowedHeaders:
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());
app.options('*', cors()); // Kích hoạt pre-flight request cho tất cả các route
app.use(cookieParser(process.env.COOKIE_SECRET));

// Use morgan for logging in development

    app.use(morgan("dev"));


app.use("/api/v1", appRouter);
export default app;
