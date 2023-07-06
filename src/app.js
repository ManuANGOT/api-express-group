import express from "express";
import router from "./components/user/user.routes";

const app = express();

app.use('/users', router)

app.get('/', (req, res) => {
    res.send("Hello world !");
});


export { app };