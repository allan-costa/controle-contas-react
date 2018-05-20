// Loader é o arquivo que vai carregar os principais arquivos de configuração
// o Server é onde tem a configuração do servidor


const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)