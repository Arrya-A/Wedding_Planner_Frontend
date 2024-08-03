import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderUser() {
  return (
    <>
      <Nav className='ms-5 py-3'>
        <div className='d-flex flex-column'>
          <img className='ms-5 ps-2' src={logo} alt="" height={'50px'} width={'100px'}/>
          <h3 id='brandname'>Wedding Bells</h3>
        </div>
        <Nav.Item className='ms-auto'>
          <Nav.Link className='mt-2' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mt-2' eventKey="link-1">Testimonial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mt-2' eventKey="link-2">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Link to={'/register'}><Button className='btn btn-outline-light'>Register Here</Button></Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default HeaderUser