import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import { CarouselItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/homeuser.css'


function HomeUser() {
  return (
    <>
      


      <section className="search-section">
      <div className="search-container ">
        <h2 className="text-center" style={{ fontSize: '40px', fontWeight: '600',marginTop:'-100px' }}>
          <span style={{color: 'white' }}>Make Your</span> <br /> 
          <span style={{ color: '#d63384' }}>Dream Wedding </span> <span style={{ color: 'white' }}>a Reality </span> 
        </h2>
        <p className="justify-content-center align-items-center d-flex" style={{ textAlign: 'justify',alignItems:'center' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti <br/>natus sequi esse ex quos qui
          amet omnis quisquam labore magnam. <br/>Totam fugit natus odio laudantium? 
          Ab, impedit! Cumque, inventore veniam.
        </p>
        <div className="d-flex justify-content-center align-items-center  section">
          <Dropdown className="dropdown-container">
            <Dropdown.Toggle variant="white border rounded-0" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Venues</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Catering</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="input-container justify-content-around">
            <input type="text" placeholder="Location" className="text-center bg-transparent p-2 border-white" />
            <button className='btn btn-danger ms-4  p-2' style={{width:'100px'}}>Search</button>
          </div>
        </div>
      </div>
    </section>



   {/* Testimonials */}
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
       
       

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/images/te1.jpg" />
      <Card.Body>
        
        <Card.Title><h5>Mary Jane</h5></Card.Title>
        <Card.Text>
        <h4 class="mb-2">Tempor incididunt ut labore hytnm
						</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Carousel.Item>
      
      



      <Carousel.Item>
      

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/images/te2.jpg" />
      <Card.Body>
      <Card.Title><h5>Olivia Ruth</h5></Card.Title>
        <Card.Text>
        <h4 class="mb-2">Tempor incididunt ut labore hytnm
						</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Carousel.Item>





      <Carousel.Item>
       
     

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/images/te3.jpg" />
      <Card.Body>
        <Card.Title>	<h5>Blake Joe</h5></Card.Title>
        <Card.Text>
        <h4 class="mb-2">Tempor incididunt ut labore hytnm
						</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
 





















     
			

			


    </>
  )
}

export default HomeUser