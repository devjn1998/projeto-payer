import express from "express";
import dotenv from "dotenv";
import trabalheConoscoRouter from "./routes/trabalheConosco";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api/trabalhe-conosco", trabalheConoscoRouter);

export default app;
