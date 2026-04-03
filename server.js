const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Assets globais
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 2. Arquivos estáticos de /empreendimentos (css, js, etc)
app.use('/empreendimentos', express.static(path.join(__dirname, 'empreendimentos')));

// 3. SPA fallback de /empreendimentos (IMPORTANTE)
app.get('/empreendimentos/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'empreendimentos', 'index.html'));
});

// 4. Rota base de /empreendimentos
app.get('/empreendimentos', (req, res) => {
  res.sendFile(path.join(__dirname, 'empreendimentos', 'index.html'));
});

// 5. App principal (static)
app.use(express.static(__dirname));

// 6. Fallback global (SPA principal)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});