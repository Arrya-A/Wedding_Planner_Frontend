import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CateringCard() {
  return (
    <>

 <Card style={{ width: '100%'}}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._lBIq_V2kkkccsuHY3D32gHaFj?rs=1&pid=ImgDetMain"height={'300px'} />
      <Card.Body>
        
        <div className='d-flex justify-content-between'>
        <Card.Title>Catering Details</Card.Title>
        
        <Button variant="danger"><FontAwesomeIcon icon={faTrashCan}/></Button>
        </div>
      </Card.Body>
    </Card>
  

    </>
  )
}

export default CateringCard



