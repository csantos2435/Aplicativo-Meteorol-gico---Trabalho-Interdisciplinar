const server = require('./server');


(async () => {
    await server.start();

    console.log('server started ' + server.info.uri);
})();

// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MONGO_URI, PORT } = require('./config');

// Conexão com o banco de dados
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

// Inclui rotas
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
