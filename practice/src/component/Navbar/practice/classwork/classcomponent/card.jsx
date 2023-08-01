
import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
class Card extends Component {
    render() {
        return (
            <MDBCard className='mb-5'>
            <MDBCardImage  src={this.props.imgData} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='text-danger'>{this.props.Cardtitle}</MDBCardTitle>
              <MDBCardText className='text-dark'>
               {this.props.cardText}
              </MDBCardText>
              <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        );
    }
}

export default Card;