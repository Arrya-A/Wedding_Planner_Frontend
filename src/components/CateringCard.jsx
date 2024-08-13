import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CateringCard({ caterer }) {
  return (
    <>

      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._lBIq_V2kkkccsuHY3D32gHaFj?rs=1&pid=ImgDetMain" height={'300px'} />
        <Card.Body>
          <Card.Title className='text-canter'>{caterer?.caterer}</Card.Title>

          <Row className='align-items-center'>
            <Col md={6} className='mb-3'>
              <Card.Text>{caterer?.emailid}</Card.Text>
            </Col>
            <Col md={6} className='mb-3'>
              <Card.Text>{caterer?.city}</Card.Text>
            </Col>
          </Row>

          <Row className='align-items-center'>
            <Col md={12} className='mb-3'>
              <Card.Text>{caterer?.contactno}</Card.Text>
            </Col>

          </Row>

          <Row className='align-items-center'>


            <Col md={12} className='mb-3'>
              <Card.Text>Price:{caterer?.priceVeg}-{caterer?.priceNonVeg} / person</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col md={12} className='mb-3'>
              <Card.Text>Booked Dates:</Card.Text>
              <Calendar
                tileClassName={({ date, view }) => {
                  if (caterer.bookedDates?.find(d => new Date(d).toDateString() === date.toDateString())) {
                    return 'booked';
                  }
                  return null;
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>


    </>
  )
}

export default CateringCard



