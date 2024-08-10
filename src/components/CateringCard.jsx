import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CateringCard() {
  return (
    <>

      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._lBIq_V2kkkccsuHY3D32gHaFj?rs=1&pid=ImgDetMain" height={'300px'} />
        <Card.Body>

          <div >
            <Card.Title>Catering Details</Card.Title>
            <Row className='align-items-center'>
            <Col md={4} className='mb-3'>
            <Card.Text>Email:</Card.Text>
            </Col>
            <Col md={4} className='mb-3' >
            <Card.Text>Contact:</Card.Text>
            </Col>
            <Col md={4} className='mb-3'>
            <Card.Text>City:</Card.Text>
            </Col>
            <Col md={4} className='mb-3'>
            <Card.Text>Price:</Card.Text>
            </Col>
           </Row>
           
          </div>
        </Card.Body>
      </Card>


    </>
  )
}

export default CateringCard



