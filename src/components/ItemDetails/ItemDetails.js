import React, {Component} from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

class ItemDetails extends Component{
  state={
    open: false
  }

  render(){
    return(
      <div>
        <Button
            className="item-details-button"
            variant="link"
            onClick={()=> this.setState({open: !this.state.open})}
            >
            {this.state.open === false ? `See` : `Hide`} item details
            {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Media.Body>
                <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022903_sd.jpg;maxHeight=1000;maxWidth=1000"/>
              </Media.Body>
              <Media.Body>
                <p>
                  Microsoft - Wireless Controller for Xbox - Patrol Tech Special Edition
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br/>
                    <strong className="price-strick">
                      {`$${this.props.price}`}
                    </strong>
                  </Col>
                  <Col md={6}>Qty:1 </Col>
                </Row>
              </Media.Body>

            </Media>
          </div>
        </Collapse>
      </div>

    )
  }
}
export default ItemDetails;
