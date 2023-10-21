const server = require('./server');
    
(async () => {
    require('../config/database')()
    await server.start();
    
    console.log('server started ' + server.info.uri);
})();

// const server = require('./server');
// const mongoose = require('mongoose')

// const{
//     MONGODB_USER = 'AplicativoMeteorologico',
//     MONGODB_PASS = 'appMeteorologico',
//     MONGODB_SERVER = 'cluster0.jcizewi.mongodb.net',
//     MONGODB_DATABASE = 'AppTest'
// } = process.env

// // Conecta ao banco de dados
// mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on('connected', () =>
//     console.log('=> MONGOSE! CONECTADO COM SUCESSO AO SERVIDOR')
// )

// mongoose.connection.on('disconnected', () =>
//     console.log('=> MONGOSE! DESCONECTADO DO SERVIDOR')
// )

// mongoose.connection.on('ERROR', error =>
//     console.error('*** MONGOSE! ERRO AO SE CONECTAR AO SERVIDOR: ' + error)
// )

// // Quando for determinar o comando de interrupção Ctrl+C 
// process.on('SIGINT', () => {
//     mongoose.connection.close(() => {
//         console.log('=> MONGOSE! desconectando...')
//         // Encerrar a aplicação sem erros
//         process.exit(0)
//     })
// })

// return async () => {
//     await server.start();
//     console.log('server started ' + server.info.uri);
// };
