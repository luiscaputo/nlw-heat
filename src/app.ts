import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`:rocktseat: Server Running on port ==> ${port}`)
})