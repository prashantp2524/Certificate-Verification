import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
{
    return (
        <>

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={'/'} >

                        <img src="https://w7.pngwing.com/pngs/80/808/png-transparent-verified-right-tick-ok-blue-icon-thumbnail.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Cerificate-Verify

                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header