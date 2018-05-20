const port = 3003

// Faz o parser de requisições como um formulario com a urlencoded ou json
const bodyParser = require('body-parser')
    // EXPRESS Servidor web que roda em cima do NODE sigleton
const express = require('express')
    // Start do servidor
const server = express()


const allowCors = require('./cors')

// Midleware: Aplicado para todas requisições que chegam ao servidor
// Midleware para requisição: sempre que chegar uma requisição urlencoded padrão para submissão de forms
// o extended opção para suportar mais tipos de dados que o normal do urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

//Outro Midleware para fazer o parse de um json
server.use(bodyParser.json())


server.use(allowCors)

//Registrar a porta declarada na URL
server.listen(port, function() {
    console.log(`BACKEND está executando na porta: ${port}.`)
})

module.exports = server