import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const HomePage = () =>
{
    return (
        <>
            <div className='home-page'>

                <div className='container home-content'>
                    <div className='row'>
                        <div className='col'>
                            <div style={{ width: '65%' }}>

                                <h1>Take The First Step To Learn With Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, at voluptate accusamus eius corporis praesentium tenetur voluptas facere iste dolorum! Quae corrupti id adipisci voluptatibus rerum esse aperiam eius sint.</p>
                            </div>
                            <div>
                                <Link to={'verify'}> <button type='button' style={{ width: '65%', backgroundColor: 'transparent', }} className='btn btn-primary cutomBtn'>Verify Certificates</button></Link>
                            </div>
                        </div>
                        <div className='col'>
                            <img style={{ width: '100%', borderRadius: '5%' }} src="https://eu-central.storage.cloudconvert.com/tasks/a066f5f7-d4f7-4972-b190-1a2104fbefb9/pngImage.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20231003%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20231003T075939Z&X-Amz-Expires=86400&X-Amz-Signature=22bf6f1c812113a37122d02b809ae650650ff1b861cdca15d5fcdd13ccd76895&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22pngImage.png%22&response-content-type=image%2Fpng&x-id=GetObject" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage