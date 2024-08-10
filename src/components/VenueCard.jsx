import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VenueCard() {
  return (
    <>

      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg" height={'300px'} />
        <Card.Body>

          <div >
          
           <Card.Title>Venue</Card.Title>
           <Row className='align-items-center'>
           <Col md={4} className='mb-3'>
           <Card.Text>Email:</Card.Text>
             </Col>
             <Col md={4}  className='mb-3'>
            <Card.Text>Contact:</Card.Text>
            </Col> 
            <Col md={4}  className='mb-3'>
            <Card.Text>City:</Card.Text>
            </Col> 
            <Col md={4}  className='mb-3'>
            <Card.Text>Capacity:</Card.Text>
            </Col> 
            <Col md={4}  className='mb-3'>
            <Card.Text>Price:</Card.Text>
            </Col> 
         </Row>
          </div>
        </Card.Body>
      </Card>


    </>
  )
}

export default VenueCard