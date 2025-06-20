import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello TS");
});

app
  .listen(PORT, () => {
    console.log(`Server running at PORT: http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
