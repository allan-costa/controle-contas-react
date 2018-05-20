import React from 'react'

// Esse modulo é chamado em lancamentos e contas. 
export default props => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.small}</small> </h2>
    </header>
)