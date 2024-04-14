import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurando o body-parser para lidar com dados de formulário
app.use(express.json());

// Rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Node.js!');
});

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Configurações de envio de e-mail
    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'contato@fnagenciamentos.com.br',
            pass: '702390Fn@'
        }
    });

    // Conteúdo do e-mail
    const mailOptions = {
        from: 'contato@fnagenciamentos.com.br',
        to: `${email}`,
        subject: 'Novo formulário submetido',
        text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    };

    // Enviando o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o e-mail');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.status(200).send('E-mail enviado com sucesso');
        }
    });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
