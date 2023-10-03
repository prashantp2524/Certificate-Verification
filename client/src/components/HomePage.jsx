import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () =>
{
    return (
        <>
            <div>
                <h1>Home Page</h1>
            </div>
            <div>
                <Link to={'verify'}> <button type='button' className='btn btn-primary'>Verify</button></Link>
            </div>
        </>
    )
}

export default HomePage