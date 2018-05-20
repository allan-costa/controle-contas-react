import React , {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import LancamentoForm from './lancamentoForm'
import LancamentoList from './lancamentoList'


const URL = 'http://localhost:3003/api/lancamentos'
const URLCONTAS = 'http://localhost:3003/api/contas'

export default class Lancamento extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            descricao: '', 
            tipo: 'Crédito', 
            conta: '', 
            valor: 0, 
            list: []
        }

        this.handleTipo = this.handleTipo.bind(this)
        this.handleConta = this.handleConta.bind(this)
        this.handleValor = this.handleValor.bind(this)

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }


    handleRemove(lancamento) {
        axios.delete(`${URL}/${lancamento._id}`)
            .then(resp => this.refresh(this.state.descricao))
    }

    handleGetContas() {
        axios.get(`${URLCONTAS}?sort=-createdAt$`)
        .then(resp => this.setState({...this.state, list: resp.data}))
    }

    refresh(descricao = '') {
        const search = descricao ? `&descricao__regex=/${descricao}/`: ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, descricao, list: resp.data}))
    }

    handleChange(e) {
        this.setState({...this.state, descricao: e.target.value})
    }

    handleConta(e) {
        this.setState({...this.state, conta: e.target.value})
    }

    handleValor(e) {
        this.setState({...this.state, valor: e.target.value})
    }

    handleTipo(e) {
        this.setState({...this.state, tipo: e.target.value})
    }

    handleAdd() {
        const descricao = this.state.descricao
        const tipo = this.state.tipo
        const conta = this.state.conta
        const valor = this.state.valor

        axios.get(URLCONTAS, {
            params: {
              nome: conta
            }
          })  
          .then(resp => console.log(resp.data))


        axios.post(URL, {descricao, tipo, conta, valor})
        .then(resp => this.refresh())
        
    }

    handleSearch() {
        this.refresh(this.state.descricao)
    }

    handleMarkAsDone(lancamento) {
        axios.put(`${URL}/${lancamento._id}`, {...lancamento, done: true})
            .then(resp => this.refresh(this.state.descricao))
    }

    handleMarkAsPending(lancamento) {
        axios.put(`${URL}/${lancamento._id}`, {...lancamento, done: false})
            .then(resp => this.refresh(this.state.descricao))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                
                <PageHeader name='Gerar' small='lançamentos'></PageHeader>
                <LancamentoForm 
                   
                    descricao={this.state.descricao}
                    tipo={this.state.tipo}
                    conta={this.state.conta}
                    valor={this.state.valor}

                    handleChange={this.handleChange}
                    handleTipo={this.handleTipo}
                    handleValor={this.handleValor}
                    handleConta={this.handleConta}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <LancamentoList 
                   
                    list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    
                />
            </div>
        )
    }
}