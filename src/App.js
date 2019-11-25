import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SubtTotal from './components/Subtotal/Subtotal';
import PickUpSavings from "./components/PickUpSavings/PickUpSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      total: 100,
      PickUpSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }

  }
  render(){
  return (
    <div className="container">
      <Container className="purchase-card">
        <h1>ShopNet</h1>
        <SubtTotal price={this.state.total.toFixed(2)}/>
        <PickUpSavings price={this.state.PickUpSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
        <hr/>
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
        <ItemDetails/>
      </Container>
    </div>
  );
}
}

export default App;
