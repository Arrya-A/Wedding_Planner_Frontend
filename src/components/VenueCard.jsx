
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function VenueCard({ venue }) {
  return (
    <>

      <Card style={{ width: '100%' }} className='mt-4'>
        <Card.Img variant="top" src={venue?.projectImg} height={'300px'} />
        <Card.Body>
          <Card.Title className='text-canter'>{venue?.venue}</Card.Title>

          <Row className='align-items-center'>
            <Col md={6} className='mb-3'>
              <Card.Text>{venue?.emailid}</Card.Text>
            </Col>
            <Col md={6} className='mb-3'>
              <Card.Text>{venue?.city}</Card.Text>
            </Col>
          </Row>

          <Row className='align-items-center'>
          <Col md={6} className='mb-3'>
              <Card.Text>{venue?.contactno}</Card.Text>
            </Col>
            <Col md={6} className='mb-3'>
              <Card.Text>Capacity:{venue?.capacity}</Card.Text>
            </Col>
          </Row>

          <Row className='align-items-center'>
            
            
            <Col md={12} className='mb-3'>
              <Card.Text>Price:{venue?.price}</Card.Text>
            </Col>
          </Row>

          <Row>
            <Col md={12} className='mb-3'>
              <Card.Text>Booked Dates:</Card.Text>
              <Calendar
                tileClassName={({ date, view }) => {
                  if (venue.bookedDates?.find(d => new Date(d).toDateString() === date.toDateString())) {
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

export default VenueCard