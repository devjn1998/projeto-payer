import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const router = express.Router();

interface MulterRequest extends Request {
  file?: any; // Simplificado para evitar erros de tipagem
}

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/curriculos"); // Certifique-se de que este diretório existe
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Formato de arquivo não suportado"));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de 5MB
  },
});

// Endpoint para receber o formulário
router.post(
  "/",
  upload.single("curriculo"),
  async (req: MulterRequest, res: Response) => {
    try {
      const { nome, email, telefone, cargo, experiencia } = req.body;
      const curriculo = req.file;

      if (!curriculo) {
        res.status(400).json({
          success: false,
          message: "Currículo é obrigatório",
        });
        return;
      }

      // Usando FormData para enviar o formulário com anexo
      const formData = new FormData();
      formData.append("service_id", "service_seu_id"); // Substituir pelo seu service ID
      formData.append("template_id", "template_seu_id"); // Substituir pelo seu template ID
      formData.append("user_id", "user_seu_id"); // Substituir pelo seu user ID

      // Dados do template
      const templateParams = {
        to_email: "contato@fnagenciamentos.com.br",
        from_name: nome,
        from_email: email,
        telefone: telefone,
        cargo: cargo,
        experiencia: experiencia || "Não informada",
      };

      formData.append("template_params", JSON.stringify(templateParams));

      // Anexar o currículo
      formData.append("file", fs.createReadStream(curriculo.path), {
        filename: curriculo.originalname,
        contentType: curriculo.mimetype,
      });

      // Enviar via API do EmailJS
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        formData,
        {
          headers: {
            ...formData.getHeaders(),
          },
        }
      );

      if (response.status === 200) {
        // Enviar confirmação para o candidato via EmailJS (opcional)
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_seu_id",
          template_id: "template_confirmacao_id", // Template específico para confirmação
          user_id: "user_seu_id",
          template_params: {
            to_name: nome,
            to_email: email,
            cargo: cargo,
          },
        });

        // Limpar o arquivo após o envio
        fs.unlinkSync(curriculo.path);

        res.status(200).json({
          success: true,
          message: "Candidatura recebida com sucesso!",
        });
      } else {
        throw new Error("Falha ao enviar e-mail");
      }
    } catch (error) {
      console.error("Erro ao processar candidatura:", error);
      res.status(500).json({
        success: false,
        message: "Erro ao processar sua candidatura. Tente novamente.",
      });
    }
  }
);

export default router;
