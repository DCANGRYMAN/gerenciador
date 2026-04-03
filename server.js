const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Serve os arquivos estáticos da pasta raiz
app.use(express.static(__dirname));

// 2. Serve especificamente a pasta 'assets' 
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// 3. Rota /empreendimentos - serve o index.html
app.get('/empreendimentos', (req, res) => {
    res.sendFile(path.join(__dirname, 'empreendimentos', 'index.html'));
});

// 4. Serve arquivos estáticos de empreendimentos (css, js, imagens, etc)
app.use('/empreendimentos', express.static(path.join(__dirname, 'empreendimentos')));

// 5. Fallback para /empreendimentos/* - se tiver rotas internas
app.get('/empreendimentos/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'empreendimentos', 'index.html'));
});

// 6. Rota coringa para app principal (por último!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 7. Log de inicialização
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`App principal: http://localhost:${PORT}`);
    console.log(`Empreendimentos: http://localhost:${PORT}/empreendimentos`);
});