const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Serve os arquivos estáticos da pasta raiz
// Isso é necessário para o favicon.ico e outros arquivos soltos
app.use(express.static(__dirname));

// 2. Serve especificamente a pasta 'assets' 
// Isso garante que o caminho 'assets/index-Dhf9euDW.js' funcione
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 3. Subrota /empreendimentos - serve o build do React
// Exemplo: http://localhost:3000/empreendimentos
app.use('/empreendimentos', express.static(path.join(__dirname, 'empreendimentos/build')));

// 4. Fallback para /empreendimentos com React Router
// Garante que rotas internas do app empreendimentos funcionem
app.get('/empreendimentos/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'empreendimentos/build', 'index.html'));
});

// 5. Rota coringa para SPAs (importante para React/Vite)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 6. Log de inicialização
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📱 App principal: http://localhost:${PORT}`);
    console.log(`🏢 Empreendimentos: http://localhost:${PORT}/empreendimentos`);
});