// MIDDLEWARE COM CABEÇALHOS DO CORS
module.exports = function(req, res, next) {
    // Permite qualquer origem
    res.header('Access-Control-Allow-Origin', '*')

    // Metodos permitidos
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // cabeçalhos do cors
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    // para continuar o fluxo da aplicação
    next()
}