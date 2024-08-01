import React from 'react'
import CateringCard from './CateringCard'

function ViewCatering() {
  return (
   <>
   <div className='row'>
    <h4>Catering</h4>
    <div className='col-md-3'>
        <CateringCard/>
    </div>

    <div className='col-md-3'>
        <CateringCard/>
    </div>

    <div className='col-md-3'>
        <CateringCard/>
    </div>

    <div className='col-md-3'>
        <CateringCard/>
    </div>


    
   </div>
   </>
  )
}

export default ViewCatering