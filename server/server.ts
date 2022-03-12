import dotenv from "dotenv";
dotenv.config();
import express from "express";
import render from "./render";
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("public"));
app.get("*", render);

app.listen(port, () => console.log(`Server has been started with port ${port}`));
