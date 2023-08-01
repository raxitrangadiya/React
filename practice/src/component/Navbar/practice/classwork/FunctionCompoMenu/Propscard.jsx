import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <MDBCard className='card-height' border="secondary" background="dark" shadow="5">
      <MDBCardImage className='card-img' fluid src={props.imagedata} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
        {props.cardtxt}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}