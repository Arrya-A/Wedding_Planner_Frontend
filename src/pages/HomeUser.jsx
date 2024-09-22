import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/homeuser.css'
import { Link } from 'react-router-dom';
import ViewCatering from '../components/ViewCatering';
import { useState } from 'react';
import ViewVenue from '../components/ViewVenue';

function HomeUser() {
  const [open, setOpen] = useState(false);
  const [searchCity, setSearchCity] = useState('');


  const handleSearchInputChange = (e) => {
    setSearchCity(e.target.value); // Update state on input change
  };

  return (
    <>
      <div className="row" style={{
        backgroundImage: `url('https://www.venuelook.com/images/new-home-images/optimized/city/home-background.jpg')`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        alignItems: 'center'
      }}>
        <div className="container text-center">

          <div className="row">
            <div className="col-12">
              <h2 style={{ fontSize: '40px', fontWeight: '600', marginTop: '-100px' }}>
                <span style={{ color: 'white' }}>Make Your</span> <br />
                <span style={{ color: '#d63384' }}>Dream Wedding </span>
                <span style={{ color: 'white' }}>a Reality</span>
              </h2>
            </div>
            <div className="col-12">
              <div className='rowbg'>
                <p style={{ textAlign: 'justify', color: 'white' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti <br /> natus sequi esse ex quos qui
                  amet omnis quisquam labore magnam. <br /> Totam fugit natus odio laudantium? Ab, impedit! Cumque, inventore
                  veniam.
                </p>
              </div>
              <div className="col-12 " id="btnclass">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center section">
                  <div className="dropdown-container mb-3 mb-md-0">
                    
                  </div>
                  <div className="input-container d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <input
                      type="text"
                      placeholder="Search your Location"
                      className="text-center bg-transparent p-2 border-white rounded-2 w-100"
                      id="location"
                      value={searchCity}
                      onChange={handleSearchInputChange} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewVenue searchCity={searchCity} />
      <ViewCatering searchCity={searchCity} />


      {/* Testimonials */}
      <section class="news py-5">
        <div class="container py-xl-5 py-lg-3" id="testimonial">
          <h3 class="heading-agileinfo text-dark text-center">Testimonials</h3>
          <div class="row mt-md-5 pt-4">
            <div class="col-md-4 item" >
              <div class="feedback-info py-5 px-4  d-flex align-items-center justify-content-center flex-column">
                <h4 class="mb-2">Tempor incididunt ut labore hytnm</h4>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
                <div class="feedback-grids mt-4">
                  <div class="feedback-img">
                    <img src="./src/images/te1.jpg" class="img-fluid rounded-circle d-flex" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5 className=' m-4'>Mary Jane</h5>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 item-2 " >
              <div class="feedback-info py-5 px-4">
                <h4 class="mb-2">Tempor incididunt ut labore hytnm
                </h4>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
                <div class="feedback-grids mt-4">
                  <div class="feedback-img">
                    <img src="./src/images/te3.jpg" class="img-fluid rounded-circle" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5 className='m-4'>Olivia Ruth</h5>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 item " >
              <div class="feedback-info py-5 px-4">
                <h4 class="mb-2 ">Tempor incididunt ut labore hytnm
                </h4>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo.</p>
                <div class="feedback-grids mt-4">
                  <div class="feedback-img">
                    <img src="./src/images/te2.jpg" class="img-fluid rounded-circle" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5 className='m-4'>Blake Joe</h5>
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