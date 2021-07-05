import React from 'react'
import { Link } from 'react-router-dom'
export default function ThankYou() {
    return (
        <div>
            <h1 className='text-center mt-5'>Thanks For Ordering 🧀</h1>
            <Link to='/'>
            <button className='btn btn-dark d-flex justify-content-center' style={{margin:"10px auto"}}>⬅️ Go Back</button>
            </Link>
        </div>
    )
}
