// CONFIGURAÇÃO COM O MONGO - ABRIR CONEXÃO COM O MONGO E ENVIAR COMANDOS INSET,UPDATE ETC...
// Faz mapeamento dos objetos em javascript para os documentos que vão pro mongo
// Faz conexão com o mongo e envia os comandos (insert, delete, update, etc...)
const mongoose = require('mongoose')

//Tratar uma mensagem de advertencia que aparece do mongoose
mongoose.Promise = global.Promise

//
module.exports = mongoose.connect('mongodb://localhost/lancamento')