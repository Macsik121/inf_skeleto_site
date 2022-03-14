import dotenv from "dotenv";
dotenv.config();
<<<<<<< HEAD
import express, { Request, Response } from "express";
=======
import express from "express";
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
import render from "./render";
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("public"));
<<<<<<< HEAD
app.get("/page5", (req: Request, res: Response) => {
    res.redirect("/");
});
=======
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
app.get("*", render);

app.listen(port, () => console.log(`Server has been started with port ${port}`));
