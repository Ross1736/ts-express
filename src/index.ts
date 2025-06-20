import express, { Request, Response } from "express";
import { sum } from "./utils/functions";

const app = express();
const PORT: number = 8080;

app.get("/", (req: Request, res: Response) => {
  const sumResult = sum(3, 2);

  res.status(200).send(`Hello TS > ${sumResult}`);
});

app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err: Error) => {
    console.error("Server error:", err.message);
  });
