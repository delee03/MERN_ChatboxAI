// console.log(
//   "This is a starter kit for this amazing project. With 💓 By Indian Coders"
// );
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;
// const app = express();

//HTTP get, put, post

// app.use(express.json());

// app.post("/hello", (req, res, next) => {
//     console.log(req.body.name);
//     return res.send("hello indian coders i'm building MERN AI");
// });

// app.delete("/user/:id", (req, res, next) => {
//     console.log(req.params.id);
//     return res.send("hello");
// });
connectToDatabase()
    .then(() => {
        app.listen(PORT, () =>
            console.log("🤟Server open and connected to Database 🌝")
        );
    })
    .catch((err) => console.log(err));
