import React, {Component} from 'react';
import {Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

class TaxesFees extends Component{
  state={
    open: false
  }

  render(){
    return(
      <div>
        <Button
            className="item-details-button"
            bsStyle="link"
            onClick={()=> this.setState({open: !this.state.open})}
            >
            {this.state.open === false ? `See` : `Hide`} item details
            {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <Well>
            <Media>
              <Media.Left>
                <img
                width={100}
                height={100}
                alt="thumbnail"
                src=""/>
            </Media>
          </Well>
        </Collapse>
      </div>

    )
  }
}
export default TaxesFees;
