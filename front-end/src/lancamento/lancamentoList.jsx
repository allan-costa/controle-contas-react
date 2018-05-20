import React from 'react'
import IconButton from '../template/iconButton'

export default props=> {

    const renderRows = () => {
        const list = props.list || []
        return list.map(lancamento => (
            <tr key={lancamento._id}>
                <td className={lancamento.done ? 'markedAsDone': ''}>
                    {lancamento.descricao}
                </td>
                <td className={lancamento.done ? 'markedAsDone': ''}>
                    {lancamento.valor}
                </td>
                <td className={lancamento.done ? 'markedAsDone': ''}>
                    {lancamento.tipo}
                </td>
                <td className={lancamento.done ? 'markedAsDone': ''}>
                    {lancamento.conta}
                </td>

                <td>
                    <IconButton style='success' icon='check' hide={lancamento.done}
                                onClick={() => props.handleMarkAsDone(lancamento)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!lancamento.done}
                                onClick={() => props.handleMarkAsPending(lancamento)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!lancamento.done}
                                onClick={() => props.handleRemove(lancamento)}> 
                    </IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Conta</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}