import React, { useEffect, useState } from 'react'
import CateringCard from './CateringCard'
import { getAllCatererApi } from '../services/allApi'

function ViewCatering() {
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
    return (
        <>

            <div className='row w-100 p-5'>
                <h4 className='my-3'>Catering</h4>

                {allCaterer ?
                    allCaterer?.map((item) => (
                        <div className='col-md-3'>
                            <CateringCard caterer={item} />
                        </div>))
                    :
                    <p className='text-danger fs-3 mt-5'>Nothing to display</p>
                }

        </div >
   </>
  )
}

export default ViewCatering