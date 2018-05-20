import React from 'react'


import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => {
      
    const keyhandler = (e) => {
        if(e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key == 'Escape') {
            props.handleClear()
        }
    }

    return  (
        <div role='form' className='lancamentoForm'>
                
                <Grid cols='12 9 10'>
                <h4 >Descrição</h4>
                <input id='descricao' className='form-control' 
                    placeholder='Lançamento'
                    value={props.descricao} 
                    onChange={props.handleChange}
                    onKeyUp={keyhandler}
                />
                <h4>Tipo</h4>
                <select id='tipo' className='form-control' value={props.tipo}  onChange={props.handleTipo} >
                    <option value="Crédito" selected>Crédito</option>
                    <option value="Débito">Débito</option>
                    
                </select> 
                <h4>Conta</h4>
                <input id='conta' className='form-control' 
                    placeholder=''
                    value={props.conta} 
                    onChange={props.handleConta}
                />
            
                <h4>Valor</h4>
                <input id='valor' className='form-control' 
                    placeholder=''
                    value={props.valor} 
                    onChange={props.handleValor}
                />

                </Grid>
    
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd}></IconButton>
            <IconButton style='info' icon='search'
                onClick={props.handleSearch}> </IconButton>
            <IconButton style='default' icon='close'
                onClick={props.handleClear}> </IconButton>
        </Grid>
        
        </div>
    )
}