import dotenv from "dotenv";
import express from "express";
import trabalheConoscoRouter from "./routes/trabalheConosco";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api/trabalhe-conosco", trabalheConoscoRouter);

// Iniciar servidor se este arquivo for executado diretamente
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
