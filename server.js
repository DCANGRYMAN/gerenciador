const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Primeiro, sirva os arquivos estáticos (JS, CSS, Imagens)
// Se os seus arquivos buildados estão na raiz, use __dirname
// Se estiverem em uma pasta 'dist', mude para path.join(__dirname, 'dist')
app.use(express.static(__dirname)); 

// 2. DEPOIS dos estáticos, coloque a rota para o index.html
// Isso só será chamado se o arquivo acima NÃO for encontrado
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});