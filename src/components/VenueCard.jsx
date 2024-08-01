import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VenueCard() {
  return (
    <>

    <Card style={{ width: '100%'}}>
         <Card.Img variant="top" src="https://assets.venuecrew.com/wp-content/uploads/2022/08/01233727/London-hotel-wedding-venue-The-Kimpton-Fitzroy-ballroom.jpg"height={'300px'} />
         <Card.Body>
           
           <div className='d-flex justify-content-between'>
           <Card.Title>venue here</Card.Title>
           
           <Button variant="danger"><FontAwesomeIcon icon={faTrashCan}/></Button>
           </div>
         </Card.Body>
       </Card>
     
   
       </>
  )
}

export default VenueCard