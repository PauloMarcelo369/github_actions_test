import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("aplicativo funcionando de boa! :) :) :)");
});

app.get("/bom-dia", (req, res) => {
  res.json("sim, isso é um bom dia!");
});

export default app;
