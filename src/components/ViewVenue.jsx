import React from 'react'
import VenueCard from './VenueCard'
function ViewVenue() {
  return (
    <>
    <div className='row'>
    <h4>Venue</h4>
    <div className='col-md-3'>
        <VenueCard/>
    </div><div className='col-md-3'>
        <VenueCard/>
    </div>

    <div className='col-md-3'>
        <VenueCard/>
    </div>

    <div className='col-md-3'>
        <VenueCard/>
    </div>



    </div>
</>
  )
}
export default ViewVenue