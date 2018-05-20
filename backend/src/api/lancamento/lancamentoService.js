//Recebe o exports de lancamento.js ou seja os documentos
const Lancamento = require('./lancamento')

// Cria uma api REST padrão
Lancamento.methods(['get', 'post', 'put', 'delete'])

// new: true: Quando atualizar uma registro no mongo ele devolve o registro antigo. desse modo abaixo ele devolve o mais novo
// runValidators: Por padrão no update o mongo não faz as validações declaradas no schema todo.js. desse modo que está aqui ele irá validar
Lancamento.updateOptions({ new: true, runValidators: true })

// exporta o todo com todo restfull já funcionando
module.exports = Lancamento