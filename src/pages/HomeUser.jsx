import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import { CarouselItem } from 'react-bootstrap';

function HomeUser() {
  return (
    <>
    




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