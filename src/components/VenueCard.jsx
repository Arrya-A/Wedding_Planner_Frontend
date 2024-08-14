
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Col, Collapse, Row } from 'react-bootstrap';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function VenueCard({ venue }) {
  const [open, setOpen] = useState(false);
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
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapse-calendar"
            aria-expanded={open}
            className="mb-2"
          >
            {open ? 'Hide Available Dates' : 'Check Available Dates'}
          </Button>
              <Collapse in={open}>
                <div id="calendar-collapse">
                  <Card.Text className='mt-3'>Booked Dates:</Card.Text>
                  <Calendar
                    tileClassName={({ date, view }) => {
                      if (venue.bookedDates?.find(d => new Date(d).toDateString() === date.toDateString())) {
                        return 'booked';
                      }
                      return null;
                    }}
                  />
                </div>
              </Collapse>
            </Col>
          </Row>
        </Card.Body>
      </Card>


    </>
  )
}

export default VenueCard