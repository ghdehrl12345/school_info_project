import express from "express";
import morgan from "morgan";
import path from "path";
import bodyparser from "body-parser";
import dotenv from "dotenv"
dotenv.config();
import globalrouter from "./routers/globalRouter";
import adminRouter from "./routers/adminRouter";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname,"/assets")));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodeyparser.json());

app.use("/", globalRouter);
app.use("/admin", adminRouter)

app.listen(PORT, () => {
    console.log(`${PORT} server START`);
});