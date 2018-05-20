// Faz mapeamento do objeto para o documento do mongo

const restful = require('node-restful')

//API rest pronta sobre o mongoose
const mongoose = restful.mongoose

//Campos do documento
const lancamentoSchema = new mongoose.Schema({
    tipo: { type: String, required: false },
    conta: { type: String, required: false },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    done: { type: Boolean, require: true, default: false }, //finalizado
    createdAt: { type: Date, deafult: Date.now } //datacriação por padrão já insere a data atual
})


module.exports = restful.model('Lancamento', lancamentoSchema)