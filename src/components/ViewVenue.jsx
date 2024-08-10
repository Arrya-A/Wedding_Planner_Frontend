import React, { useEffect, useState } from 'react'
import VenueCard from './VenueCard'
import { getAllVenueApi } from '../services/allApi';

function ViewVenue() {

    const [allVenue, setAllVenue] = useState([])

    const getAllVenue = async () => {
        const result = await getAllVenueApi()
        // console.log(result);
        setAllVenue(result.data)

    }
    console.log(allVenue);


    useEffect(() => {
        getAllVenue()
    }, [])


    return (
        <>
            <div className='row w-100 p-5'>
                <h4 className='my-3'>Venue</h4>

                {allVenue ?
                allVenue?.map((item)=>(
                    <div className='col-md-3'>
                        <VenueCard venue={item} />
                    </div>))
                    :
                    <p className='text-danger fs-3 mt-5'>Nothing to display</p>
                }



            </div>
        </>
    )
}
export default ViewVenue