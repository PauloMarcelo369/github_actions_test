import express from "express";
import cors from "cors";
import fs from "node:fs";

let bosta;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("aplicativo funcionando de boa!");
});

export default app;
