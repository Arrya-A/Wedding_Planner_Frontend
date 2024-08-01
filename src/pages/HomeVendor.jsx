import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function HomeVendor() {
  const [openSection, setOpenSection] = useState(null);
  const handleToggle = (section) => {
   
    setOpenSection(openSection === section ? null : section);
  };


  return (
    <>
      <section id='introduction'>

        <div className="row" style={{
          backgroundImage: `url('https://blog.wedsites.com/wp-content/uploads/wedsites-blog-child-free-wedding-wording-etiquette.jpg')`,
          height: '100vh',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          alignItems: 'center'
        }}>
          <div className="col-md-6"></div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5">

            <div className='intro-card  rounded-5 py-5'>
              <div style={{ textAlign: 'center' }}>
                <h2 className=' text-dark mb-3'>Welcome to your vendor portal!</h2>
                <h6 className='  text-dark pt-2 px-3'>Manage your venue listings, monitor engagement,  and stay connected with couples planning their special day all in one place.</h6>
                <button className='btn btn-outline-dark mt-4'>Get Started</button>
              </div>
            </div>
          </div>
        </div>













      </section>


      <section id='category'>
        <div className="row p-5">
          <h3 className='mb-5'>Choose your category</h3>
          <div className="col-md-1"></div>
          <div className="col-md-5 mt-2">
            <div className=' d-flex' style={{ backgroundColor: 'rgb(244,213,194)', height: '150px' }}>
              <button onClick={() => handleToggle('section1')} className='btn btn-outline-primary'>Venue {openSection === 'section1' ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</button>
              <img className='ms-auto' style={{ overflow: 'hidden', borderTopLeftRadius: '10px', borderBottomLeftRadius: '80px' }} src="https://png.pngtree.com/thumb_back/fh260/background/20230902/pngtree-the-center-of-the-wedding-venue-is-decorated-with-flower-arrangements-image_13158307.jpg" alt="no image" height={'150px'} width={'200px'} />
            </div>
          </div>
          <div className="col-md-5 mt-2">
            <div className='d-flex' style={{ backgroundColor: 'rgb(216,223,252)', height: '150px' }}>
              <button onClick={() => handleToggle('section2')} className='btn btn-outline-primary'>Caterer {openSection === 'section2' ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</button>
              <img className='ms-auto' style={{ overflow: 'hidden', borderTopLeftRadius: '80px', borderBottomLeftRadius: '10px' }} src="https://cdn0.weddingwire.com/vendor/342031/3_2/640/jpg/dsc09483_51_2130243-167639591990234.jpeg" alt="no image" height={'150px'} width={'200px'} />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>





      {/* form- venue */}




      <Collapse in={openSection === 'section1'}>
        <div>
          <section id='vendor_form' className='d-flex justify-content-center align-items-center' style={{
            height: '100vh', backgroundColor: 'rgb(244,213,194)'
          }}>
            <div className='d-flex flex-column align-items-center' style={{ width: '60%' }}>
              <div className='d-flex justify-content-center align-items-center mb-4'>
                <label htmlFor='profileImg'>
                  <input type="file" id="profileImg" style={{ display: 'none' }} />
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                    alt="Profile"
                    width='180px'
                    height='180px'
                    className='rounded-circle'
                  />
                </label>
              </div>
  
              <div className="mb-3 w-100">
                <input
                  type="text"
                  placeholder='Venue'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="email"
                  placeholder='Email id'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="text"
                  placeholder='City'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Contact No'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Maximum Capacity'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Price'
                  className='form-control rounded'
                />
              </div>
  
  
              <div className="mb-3 w-100">
                <button className='btn btn-dark w-100 rounded'>Update</button>
              </div>
            </div>
          </section>
        </div>
      </Collapse>





      {/*form - catering  */}

      <Collapse in={openSection === 'section2'}>
       <div>
          <section id='vendor_form' className='d-flex justify-content-center align-items-center' style={{
            height: '100vh', backgroundColor: 'rgb(216,223,252)'
          }}>
            <div className='d-flex flex-column align-items-center' style={{ width: '60%' }}>
              <div className='d-flex justify-content-center align-items-center mb-4'>
                <label htmlFor='profileImg'>
                  <input type="file" id="profileImg" style={{ display: 'none' }} />
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                    alt="Profile"
                    width='180px'
                    height='180px'
                    className='rounded-circle'
                  />
                </label>
              </div>
  
              <div className="mb-3 w-100">
                <input
                  type="text"
                  placeholder='Caterer'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="email"
                  placeholder='Email id'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="text"
                  placeholder='City'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Contact No'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Price per Head (Veg)'
                  className='form-control rounded'
                />
              </div>
              <div className="mb-3 w-100">
                <input
                  type="number"
                  placeholder='Price per Head (Non-Veg)'
                  className='form-control rounded'
                />
              </div>
  
  
              <div className="mb-3 w-100">
                <button className='btn btn-dark w-100 rounded'>Update</button>
              </div>
            </div>
          </section>
       </div>
      </Collapse>





    </>
  )
}

export default HomeVendor