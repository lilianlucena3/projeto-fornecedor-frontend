import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ListaProdutos  from './lista-produtos.component';
import Swal from 'sweetalert2';


export default class CadastroProdutos extends Component {
      constructor(data) {
    super(data)

    // Configurando funções
    this.onChangeNomeCategoria = this.onChangeNomeCategoria.bind(this);
    this.onChangeDescricaoCategoria = this.onChangeDescricaoCategoria.bind(this);
    this.onChangeValorCategoria = this.onChangeValorCategoria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Configurando o status
    this.status = {
      nome: '',
      descricao: '',
      valor: ''
    }
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
     const produto = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      valor: this.state.valor
    };
    axios.post('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider', produto)
      .then(res => console.log(res.data));
    Swal.fire(
  'Produto Cadastrado',
  'success'
)

    this.setState({nome: '', descricao: '', valor: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" value={this.status.nome} onChange={this.onChangeNomeCategoria}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Valor">
                <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" value={this.status.valor} onChange={this.onChangeValorCategoria}/>
             </Form.Group>
            </Col>     
        </Row>
        <Form.Group controlId="descricao">
          <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.status.descricao} onChange={this.onChangeDescricaoCategoria}/>
        </Form.Group>
        <Button variant="primary" size="lg" block="block" type="submit">
          Adicionar Produto
        </Button>
      </Form>
      <br></br>
      <br></br>

      <ListaProdutos> </ListaProdutos>
    </div>);
  }
}




