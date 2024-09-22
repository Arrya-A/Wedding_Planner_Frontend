import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='row p-5 bg-dark'>
        <div className="col-md-4" >
          <h4 className='text-white mb-4'><FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />About Us</h4>
          <p className='text-white' style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
        <div className="col-md-2  d-md-flex justify-content-center" >
          <div>
            <h4 className='mb-4 text-white'>Links</h4>
            <div >
              <Link to={'/'}> <p className='text-white'>User</p></Link>
              <Link to={'/vendorhome'}><p className='text-white'>vendor</p></Link>
              <Link to={'/viewcatering'}><p className='text-white'>Catering</p></Link>
              <Link to={'/viewvenue'}><p className='text-white'>Venue</p></Link>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
        <div className="col-md-2" >
          <div>
            <h4 className='mb-4 text-white'>Support</h4>
            <div>
              <p className='text-white'>FAQ</p>
              <p className='text-white'>Privacy Policy</p>
              <p className='text-white'>Services</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-md-flex justify-content-center" >
          <div>
            <h4 className='text-white'>Contact us</h4>
            <div className='d-flex mt-4'>
              <input type='text' className='form-control text-bg-white' placeholder='Email Id' id="mailbox" />
              <button className='btn btn-secondary ms-4'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <FontAwesomeIcon icon={faInstagram} className='fa-2x text-white' />
              <FontAwesomeIcon icon={faTwitter} className='fa-2x text-white' />
              <FontAwesomeIcon icon={faFacebook} className='fa-2x text-white' />
              <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x text-white' />
              <FontAwesomeIcon icon={faWhatsapp} className='fa-2x text-white' />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Footer;
