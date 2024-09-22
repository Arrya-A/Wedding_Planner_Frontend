import React, { useEffect, useState } from 'react'
import VenueCard from './VenueCard'
import { getAllVenueApi } from '../services/allApi';

function ViewVenue({ searchCity }) {

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

    // Filter venues based on the searchCity prop
    const filteredVenues = allVenue.filter(venue =>
        venue.city.toLowerCase().includes(searchCity.toLowerCase())
    );

    return (
        <>
            <div className='row w-100 p-5'>
                <h4 className='my-3'>Venue</h4>

                {filteredVenues.length > 0 ?
                    filteredVenues.map((item) => (
                        <div className='col-md-3' key={item.id}>
                            <VenueCard venue={{
                                ...item,
                                bookedDates: item.bookedDates || []
                            }} />
                        </div>
                    ))
                    :
                    <p className='text-danger fs-3 mt-5'>No venues found in {searchCity}</p>
                }
            </div>
        </>
    )
}
export default ViewVenue