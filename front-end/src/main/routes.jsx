import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Lancamentos from '../lancamento/lancamento'
import Contas from '../conta/conta'

//component={Lancamento} chama a lista com os lancamentos
// <Redirect from='*' to='/lancamentos' /> Caso tenha uma url invalida e redireciona para /lancamentos
export default props => (
    <Router history={hashHistory}>
        <Route path='/lancamentos' component={Lancamentos} /> 
        <Route path='/contas' component={Contas} />
        <Redirect from='*' to='/lancamentos' />
    </Router>
)