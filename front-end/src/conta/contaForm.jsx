import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
   
    return  (
        <div role='form' className='contaForm'>
                
                <Grid cols='12 9 10'>
                <h4>Conta</h4>
                <input id='conta' className='form-control' 
                    placeholder=''
                    value={props.nome} 
                    onChange={props.handleNomeConta}
                />
                
                <h4 >Saldo</h4>
                <input id='saldo' className='form-control' 
                    placeholder='Saldo'
                    value={props.saldo} 
                    onChange={props.handleSaldoConta}
                />
                </Grid>
    
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAddConta}></IconButton>
        </Grid>
        
        </div>
    )
}