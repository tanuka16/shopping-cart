import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SubtTotal from './components/Subtotal/Subtotal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 100
    }

  }
  render(){
  return (
    <div className="container">
      <Container className="purchase-card">
        <h1>ShopNet</h1>
        <SubtTotal price={this.state.total.toFixed(2)}/>
      </Container>
    </div>
  );
}
}

export default App;
