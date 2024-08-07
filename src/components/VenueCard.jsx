import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VenueCard() {
  return (
    <>

      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg" height={'300px'} />
        <Card.Body>

          <div className='d-flex justify-content-between '>
            <Card.Title>Venue</Card.Title>
            <Card.Text>Email</Card.Text>
            <Card.Text>Contact</Card.Text>
            <Card.Text>City</Card.Text>
            <Card.Text>MaxCapacity</Card.Text>
            <Card.Text>Price</Card.Text>
          </div>
        </Card.Body>
      </Card>


    </>
  )
}

export default VenueCard