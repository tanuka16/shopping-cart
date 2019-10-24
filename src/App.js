import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SubtTotal from './components/Subtotal/Subtotal';
import  PickUpSavings from "./components/PickUpSavings/PickUpSavings"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 100,
      PickUpSaving: -3.85
    }

  }
  render(){
  return (
    <div className="container">
      <Container className="purchase-card">
        <h1>ShopNet</h1>
        <SubtTotal price={this.state.total.toFixed(2)}/>
        <PickUpSavings price={this.state.PickUpSavings} />
      </Container>
    </div>
  );
}
}

export default App;
