import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); // moveon to domain /api/v1/user
appRouter.use("/chats", chatRoutes); //move on //domain/api/v1/chats

export default appRouter;
