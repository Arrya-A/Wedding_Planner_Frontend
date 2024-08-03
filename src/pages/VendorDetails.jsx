import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../assets/img1.jpg';
import ExampleCarouselImage2 from '../assets/img2.jpg';
import ExampleCarouselImage3 from '../assets/img3.png';

function VendorDetails() {
    return (
        <>
            <section style={{backgroundImage: 'linear-gradient(to right, #ddd6f3, #faaca8)'}}>
                <div>
                    <h1 className='text-center pt-5 mb-4'>Xyz Convention Hall</h1>
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={ExampleCarouselImage1} alt="" height={'600px'} width={'600px'} />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={ExampleCarouselImage2} alt="" height={'600px'} width={'600px'} />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={ExampleCarouselImage3} alt="" height={'600px'} width={'600px'} />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-5 ">
                            <div  style={{ justifyContent: 'center' }} className=' p-5 me-5 intro-card rounded'>
                                <h4>Email id: abc@gmail.com</h4>
                                <h4>City : Kochi</h4>
                                <h4>Contact No : 9876549872</h4>
                                <h4>Maximum capacity : 1000</h4>
                                <h4>Price : 25000</h4>
                                <div className='d-flex  justify-content-center mt-4'>
                                    <button className='btn btn-outline-dark rounded-3'>Update</button>
                                    </div>
                            </div>




                        </div>
                        <div className="col-md-1"></div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default VendorDetails
// name
// photo
// mail
// city
// contact no
// max capacity
// price

// name
// photo
// mail
// city
// contact
// price veg
// price nv
