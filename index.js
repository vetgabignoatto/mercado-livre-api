const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API do Mercado Livre está online!");
});

app.post("/webhook", (req, res) => {
  console.log("Notificação recebida:", JSON.stringify(req.body));

  // Confirma o recebimento da notificação
  return res.sendStatus(200);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando na porta ${PORT}`);
});
