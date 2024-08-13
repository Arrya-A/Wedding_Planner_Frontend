import React, { useEffect, useState } from 'react'
import CateringCard from './CateringCard'
import { getAllCatererApi } from '../services/allApi'

function ViewCatering({ searchCity }) {
    const [allCaterer, setAllCaterer] = useState([])

    const getAllCaterer = async () => {
        const result = await getAllCatererApi()
        // console.log(result);
        setAllCaterer(result.data)

    }
    console.log(allCaterer);


    useEffect(() => {
        getAllCaterer()
    }, [])



    // Filter venues based on the searchCity prop
    const filteredCaterer = allCaterer.filter(caterer =>
        caterer.city.toLowerCase().includes(searchCity.toLowerCase())
    );
    return (
        <>

            <div className='row w-100 p-5'>
                <h4 className='my-3'>Catering</h4>

                {filteredCaterer.length > 0 ?
                    filteredCaterer.map((item) => (
                        <div className='col-md-3' key={item.id}>
                            <CateringCard caterer={{ 
                                    ...item, 
                                    bookedDates: item.bookedDates || []  
                                }}  />
                        </div>
                    ))
                    :
                    <p className='text-danger fs-3 mt-5'>No venues found in {searchCity}</p>
                }


                
            </div >
        </>
    )
}

export default ViewCatering