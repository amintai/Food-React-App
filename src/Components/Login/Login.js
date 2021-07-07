import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import socialMediaAuth  from './../../service/auth'
import {googleProvider}  from './../../service/authMethods'
import './../Login/Login.css'

const Login = () => {
    const [login,setLogin]=useState(null);

    const history = useHistory()
    const handleOnClick = async (provider) => {
    const ress = await socialMediaAuth(provider)
  
    localStorage.setItem('user' , JSON.stringify(ress))
      console.log("loc",localStorage.getItem('user'))
      setLogin(ress);
    history.push('/products')
    }
    return(
        <div>
            <div className="container">

                    <div className="row">
                        <div className="col text">

                            <p className='heading'> <span className='text-p'>Taste that best,</span> its on time.</p>
                           <div className='mt-5'> 
                           <label>Login With</label>
                           <input onClick={() => handleOnClick(googleProvider)} type="button" value="Google" className='btn btn-danger'/>
                           </div>
                           </div>
                        <div className="col">
                            <img src='https://image.freepik.com/free-vector/express-courier-scooter-shipping-order_74855-6447.jpg' alt="backimage" className='image'/>
                        </div>
                    </div>
                   
                        
                    
            </div>
        </div>
    )
}

export default Login