import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RemoveProdutos from './RemoveProdutos';


export default class ListaProdutos extends Component {

  constructor(data) {
    super(data)
    this.status = {
      produtos: []
    };
  }

  componentDidMount() {
    axios.get('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider')
      .then(res => {
        this.setStatus({
          produtos: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.produtos.map((res, i) => {
      return <RemoveProdutos obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}