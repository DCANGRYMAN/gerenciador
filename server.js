const express = require('express');
const path = require('path');
const app = express();

// Define a porta (a porta 3000 é comum localmente, mas a hospedagem usará a variável de ambiente PORT)
const PORT = process.env.PORT || 3000;

// Servir os arquivos estáticos da pasta atual (ou da pasta onde está seu index.html)
app.use(express.static(__dirname));

// Opcional: Se for uma SPA (Angular/React), garante que qualquer rota caia no index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});