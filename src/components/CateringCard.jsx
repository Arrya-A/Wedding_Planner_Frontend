import React, { useState } from 'react'
import { Button, Col, Collapse, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CateringCard({ caterer }) {
  const [open, setOpen] = useState(false);
  return (
    <>

      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={caterer?.imageUrl} height={'300px'} />
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
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapse-calendar"
            aria-expanded={open}
            className="mb-2"
          >
       {open ? 'Hide Available Dates' : 'Check Available Dates'}
          </Button>

          <Collapse in={open}>
            <div id="collapse-calendar">
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
            </div>
          </Collapse>
        </Card.Body>
      </Card>


    </>
  )
}

export default CateringCard



