import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (err) {
        console.log(err);
        throw new Error("cannot connect to mongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        throw new Error("Could not Disconnect from database");
    }
}

export { connectToDatabase, disconnectFromDatabase };
