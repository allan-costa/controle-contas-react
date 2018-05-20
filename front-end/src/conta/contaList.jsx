import React from 'react'
import IconButton from '../template/iconButton'

export default props=> {

    const renderRows = () => {
        const list = props.list || []
        return list.map(conta => (
            <tr key={conta._id}>
                <td >
                    {conta.nome}
                </td>
                <td >
                    {conta.saldo}
                </td>

                <td>
                    <IconButton style='danger' icon='trash-o' 
                                onClick={() => props.handleRemoveConta(conta)}> 
                    </IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Saldo</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}