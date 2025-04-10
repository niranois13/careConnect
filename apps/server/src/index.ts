import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("Hello, world!");
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${String(port)}`);
});
