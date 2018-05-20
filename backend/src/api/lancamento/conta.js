// Faz mapeamento do objeto para o documento do mongo

const restful = require('node-restful')

//API rest pronto em cima do mongoose
const mongoose = restful.mongoose

//Campos do documento
const contaSchema = new mongoose.Schema({
    nome: { type: String, required: false },
    saldo: { type: Number, required: true },
    createdAt: { type: Date, deafult: Date.now } //datacriação por padrão já insere a data atual
})


module.exports = restful.model('Conta', contaSchema)