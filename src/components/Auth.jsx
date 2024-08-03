import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
    return (
        <>
            <div style={{ backgroundColor: 'black', height: '100vh' }} className='d-flex align-items-center justify-content-center'>
                <div style={{ backgroundColor: 'white', width: '500px' }} className='p-4 rounded'>
                    {register?<h2 className='text-center text-success'>Registration Form</h2>
                    :
                    <h2 className='text-center text-success'>Sign In</h2>}
                   
                    <form>
                        {register&&<div className="mb-3 ">
                            <TextField id="standard-basic" label="Name" variant="standard" className='w-100' />
                        </div>}
                        <div className="mb-3">
                            <TextField id="standard-basic" label="Email id" variant="standard" className='w-100' type='email' />
                        </div>
                        {register&&<div className="mb-3">
                            <TextField id="standard-basic" label="Phone" variant="standard" className='w-100' type='number' />
                        </div>}
                        <div className="mb-3">
                            <TextField id="standard-basic" label="Password" variant="standard" className='w-100' type='password' />
                        </div>
                        {register&&<div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                I accept terms & conditions
                            </label>
                        </div>}


                        {register?<div className='d-flex align-items-center justify-content-center flex-column'>
                            <Link to={'/login'}><button className='btn btn-success my-4'>Create Account</button></Link>
                            <p>Already have an account? <Link to={'/login'} className='text-info'>Sign In</Link></p>
                        </div>
                        :
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Link to={'/vendorhome'}><button className='btn btn-success my-4'>Login</button></Link>
                            <p>New User? Click here to<Link to={'/register'} className='text-info'>Register</Link></p>
                        </div>}
                    </form>
                </div>
            </div>





        </>
    )
}

export default Auth