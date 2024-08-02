import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/homeuser.css'
import { Link } from 'react-router-dom';


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
              <Dropdown.Item href="#/action-1"><Link to={'viewvenue'}>Venues</Link></Dropdown.Item>
              <Dropdown.Item href="#/action-2"><Link to={'viewcatering'}>Catering</Link></Dropdown.Item>
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
   <section class="news py-5">
	
  <div class="container py-xl-5 py-lg-3">
    <h3 class="heading-agileinfo text-dark text-center">Testimonials</h3>
    <div class="row mt-md-5 pt-4"id="testimonial">

    
   
      <div  class="col-md-4 item " >
        <div class="feedback-info py-5 px-4">
          <h4 class="mb-2">Tempor incididunt ut labore hytnm
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
          <div class="feedback-grids mt-4">
            <div class="feedback-img">
              <img src="./src/images/te1.jpg" class="img-fluid rounded-circle" alt="" />
            </div>
            <div class="feedback-img-info">
              <h5>Mary Jane</h5>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      

     
      <div class="col-md-4 item-2 " >
        <div class="feedback-info py-5 px-4">
          <h4 class="mb-2">Tempor incididunt ut labore hytnm
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
          <div class="feedback-grids mt-4">
            <div class="feedback-img">
              <img src="./src/images/te3.jpg" class="img-fluid rounded-circle" alt="" />
            </div>
            <div class="feedback-img-info">
              <h5>Olivia Ruth</h5>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      
     
     
     
      <div class="col-md-4 item " >
        <div class="feedback-info py-5 px-4">
          <h4 class="mb-2">Tempor incididunt ut labore hytnm
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
          <div class="feedback-grids mt-4">
            <div class="feedback-img">
              <img src="./src/images/te2.jpg" class="img-fluid rounded-circle" alt="" />
            </div>
            <div class="feedback-img-info">
              <h5>Blake Joe</h5>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      
    
      
    </div>
  </div>
  
</section>



    </>
  )
}

export default HomeUser