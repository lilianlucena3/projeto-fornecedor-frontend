import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditaProdutos from "./components/edita-produtos.component";
import ListaProdutos from "./components/lista-produtos.component";
import CadastroProdutos from "./components/cadastro-produtos.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/cadastro-produtos"} className="nav-link">
              Cadastar Produtos
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/cadastro-produtos"} className="nav-link">
                  Cadastar Produtos
                </Link>
                <Link to={"/lista-produtos"} className="nav-link">
                  Carrinho
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CadastroProdutos} />
                <Route path="/create-expense" component={CadastroProdutos} />
                <Route path="/edit-expense/:id" component={EditaProdutos} />
                <Route path="/expenses-listing" component={ListaProdutos} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;