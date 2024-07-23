// console.log(
//   "This is a starter kit for this amazing project. With 💓 By Indian Coders"
// );
import express from "express";

const app = express();

//HTTP get, put, post

app.use(express.json());

app.post("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("hello indian coders i'm building MERN AI");
});

app.delete("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    return res.send("hello");
});

app.listen(5000, () => console.log("Server open"));
