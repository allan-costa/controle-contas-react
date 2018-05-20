const express = require('express')

module.exports = function(server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // APP Routes
    // REGISTER -> USA TODOS OS METODOS DECLARADOS EM LANCAMENTO.METHODS EM LACAMENTOSERVICE.JS
    const lancamentoService = require('../api/lancamento/lancamentoService')
    lancamentoService.register(router, '/lancamentos')

    const contaService = require('../api/lancamento/contaService')
    contaService.register(router, '/contas')
}