import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faRing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <>
      <div className="container-fluid bg-tertiary p-5">
        <div className="row">
          <div className="col-md-2">
            <h4 className='text-dark Bold'> 
              <FontAwesomeIcon icon={faRing} className="me-2 mt-5" style={{fontWeight: 'bold', fontSize: '1.85rem'}} />
              Wedding Bells
            </h4>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3 className='text-dark Bold' style={{ marginTop: '-39px', fontWeight: 'bold', fontSize: '1.65rem' }}>Company</h3>
              <p className='mt-3 text-dark'>About Us</p>
              <p className='text-dark'>Services</p>
              <p className='text-dark'>Blog</p>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3 className='text-dark Bold' style={{ marginTop: '-39px', fontWeight: 'bold', fontSize: '1.65rem' }}>Support</h3>
              <p className='mt-3 text-dark'>Contact Us</p>
              <p className='text-dark'>Faq</p>
              <p className='text-dark'>Privacy Policy</p>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center flex-column">
            <div >
              <h3 className='text-dark Bold' style={{ marginTop: '-79px', fontWeight: 'bold', fontSize: '1.65rem' }}>Quick Links</h3>
              <p className='mt-3 text-dark'>Testimonials</p>
              <p className='text-dark'>Vendor Registration</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className='mt-3'>
              <p className='text-dark text-center' style={{ marginTop: '-50px', fontWeight: 'bold', fontSize: '1.65rem', whiteSpace: 'nowrap' }}>Subscribe to Our Newsletter</p>
              <p>Stay updated with the latest wedding planning tips and trends.<br />Enter your email to subscribe</p>
              <div className='d-flex '>
                <input type="text" placeholder='Email Id' className='form-control' />
                <button className='btn btn-danger ms-4 ' style={{ backgroundColor: 'red' }}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 " style={{ marginTop: '20px', color: 'black' }} />
        <div className="row ">
          <div className="col-md-3">
            <p> <span style={{ color: 'black', fontWeight: 'bold' }}>© 2024 wedding Bells.</span> All Rights Reserved.<span style={{ fontStyle: 'italic' }}>Terms of Service and Privacy</span></p>
          </div>
          <div className="col-md-2">
            <p>Terms of service</p>
          </div>
          <div className="col-md-2">
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <div className="icon-container me-2 bg-dark">
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1rem', color: 'white', border: '2px solid black', borderRadius: '0', padding: '3px' }} />
            </div>
            <div className="icon-container me-2 bg-dark">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1rem', color: 'white', border: '2px solid black', borderRadius: '0', padding: '3px' }} />
            </div>
            <div className="icon-container bg-dark">
              <FontAwesomeIcon icon={faPinterest} style={{ fontSize: '1rem', color: 'white', border: '2px solid black', borderRadius: '0', padding: '3px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
