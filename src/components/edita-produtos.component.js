import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditaProdutos extends Component {

  constructor(data) {
    super(data)

    this.onChangeNomeCategoria = this.onChangeNomeCategoria.bind(this);
    this.onChangeDescricaoCategoria = this.onChangeDescricaoCategoria.bind(this);
    this.onChangeValorCategoria = this.onChangeValorCategoria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.status = {
      nome: '',
      descricao: '',
      valor: ''
    }
  }

  componentDidMount() {
    axios.get('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider' + this.data.match.params.id)
      .then(res => {
        this.setState({
          nome: res.data.nome,
          valor: res.data.valor,
          descricao: res.data.descricao
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeNomeCategoria(e) {
    this.setStatus({nome: e.target.value})
  }

  onChangeDescricaoCategoria(e) {
    this.setStatus({descricao: e.target.value})
  }

  onChangeValorCategoria(e) {
    this.setStatus({valor: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const produtoObj = {
      nome: this.status.nome,
      valor: this.status.valor,
      descricao: this.status.descricao
    };

    axios.put('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider' + this.data.match.params.id, produtoObj)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })

    // Redirecionando para o Lista Produtos
    this.data.history.push('/lista-produtos')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={this.status.nome} onChange={this.onChangeNomeCategoria} />
        </Form.Group>

        <Form.Group controlId="Valor">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" value={this.status.valor} onChange={this.onChangeValorCategoria} />
        </Form.Group>

        <Form.Group controlId="Descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" value={this.status.descricao} onChange={this.onChangeDescricaoCategoria} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Editar Produto
        </Button>
      </Form>
    </div>);
  }
}