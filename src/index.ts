import express, { Request, Response } from "express";

const app = express();
const PORT: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello TS");
});

app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err: Error) => {
    console.error("Server error:", err.message);
  });
