import PageHeader from '../template/pageHeader'

import React , {Component} from 'react'
import axios from 'axios'

import ContaForm from './contaForm'
import ContaList from './contaList'


const URL = 'http://localhost:3003/api/contas'


export default class Contas extends Component {
    constructor(props) {
        super(props)
        
        this.state = {nome: '', saldo: '', list: []}
        
        this.handleNomeConta = this.handleNomeConta.bind(this)
        this.handleSaldoConta = this.handleSaldoConta.bind(this)

        this.handleAddConta = this.handleAddConta.bind(this)
        this.handleRemoveConta = this.handleRemoveConta.bind(this)

        this.refresh()
    }

    handleRemoveConta(conta) {
        axios.delete(`${URL}/${conta._id}`)
            .then(resp => this.refresh(this.state.nome))
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt$`)
        .then(resp => this.setState({...this.state, list: resp.data}))

    }

    handleNomeConta(e) {
        this.setState({...this.state, nome: e.target.value})
    }

    handleSaldoConta(e) {
        this.setState({...this.state, saldo: e.target.value})
    }

    handleAddConta() {
        const saldo = this.state.saldo
        const nome = this.state.nome

        axios.post(URL, {saldo, nome})
        .then(resp => this.refresh())
        
    }

    render() {
        return (
            <div>
                
                <PageHeader name='Cadastrar' small='nova conta'></PageHeader>
                <ContaForm 
                    saldo={this.state.tipo}
                    nome={this.state.nome}

                    handleSaldoConta={this.handleSaldoConta}
                    handleNomeConta={this.handleNomeConta}
                    handleAddConta={this.handleAddConta} 
                    handleClear={this.handleClear}
                />
                <ContaList 
                    list={this.state.list} 
                    handleRemoveConta={this.handleRemoveConta} 
                />
            </div>
        )
    }
}


