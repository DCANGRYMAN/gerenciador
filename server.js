/* const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Serve os arquivos estáticos da pasta raiz
// Isso é necessário para o favicon.ico e outros arquivos soltos
app.use(express.static(__dirname));

// 2. Serve especificamente a pasta 'assets' 
// Isso garante que o caminho 'assets/index-Dhf9euDW.js' funcione
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 3. Rota coringa para SPAs (importante para React/Vite)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); */

const express = require('express');
const path = require('path');
const app = express();

// Frontend principal
app.use(express.static(path.join(__dirname, 'public')));

// Subrota /vendas com fallback para index.html
app.use('/vendas', express.static(path.join(__dirname, 'empreendimentos/build')));
app.get('/vendas/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'empreendimentos/build', 'index.html'));
});

// Fallback do frontend principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});