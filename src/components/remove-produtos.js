import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class RemoveProdutos extends Component {
    constructor(data) {
        super(data);
        this.removeProduto = this.removeProduto.bind(this);
    }

    removeProduto() {
        axios.delete('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider' + this.data.obj.id)
            .then((res) => {
                console.log('Produto Removido!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.data.obj.nome}</td>
                <td>{this.data.obj.valor}</td>
                <td>{this.data.obj.descricao}</td>
                <td>
                    <Link className="edit-link" to={"/edita-produtos/" + this.data.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.removeProduto} size="sm" variant="danger">Remover</Button>
                </td>
            </tr>
        );
    }
}