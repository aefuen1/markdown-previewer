import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/editor';
import Header from './components/header';
import Previewer from './components/previewer';
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class App extends React.Component{
  render(){
    return(
      <Container fluid>
        <Row md={4}>
          <Col md={12}><Header/></Col>
        </Row>
        <Row md={4}>
        <Col md={6}><Editor/></Col>
        <Col md={6}><Previewer/></Col>
        </Row>
      </Container>
    );
  }
}


ReactDOM.render(
  <Provider store = {store}>
  <App/>
  </Provider>,
  document.getElementById('root'));
