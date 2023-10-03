import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import './home.css'

const CertificateVerification = () =>
{
    const [result, setResult] = useState(null)
    const [certificateData, setCertificateData] = useState()
    const [cam, setCam] = useState(true)


    const handleScan = async (data) =>
    {

        if (data?.text && cam)
        {
            setResult(data?.text)
            setCam(false)
            try
            {
                const qrData = {
                    qrCode: data?.text
                }
                const response = await axios.post('https://certificate-verification-steel.vercel.app/api/certificate/verify', qrData);
                // console.log('Server response:', response.data);
                setCertificateData(response.data)
            } catch (error)
            {
                console.error('Error:', error);
            }

        }
    }
    const handleError = (error) =>
    {
        console.error(error);
    };
    const onclickHandler = () =>
    {
        setCam(true)
        setCertificateData(null)
    }

    return (


        <>
            <div className='home-page'>


                <div className='container'>
                    <div className='d-flex justify-content-center'>

                        <h1>Certificate Verification</h1>
                    </div>
                    <div style={{ height: '50vh' }}>
                        {cam ? (
                            <QrReader
                                delay={300}
                                onError={handleError}
                                onResult={handleScan}
                                constraints={{ facingMode: "environment" }}
                                videoContainerStyle={{ width: '100%', height: '50vh' }}
                            />


                        ) : (
                            <div>


                                {
                                    certificateData && certificateData.map((data) => (

                                        <div class="shadow p-3 mb-5 bg-body rounded">
                                            <div class="card" style={{ width: "18rem" }} key={data.std_Id}>
                                                <div class="card-header">
                                                    Student Certificate Data
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">ID: {data.std_Id}</li>
                                                    <li class="list-group-item">Name: {data.name}</li>
                                                    <li class="list-group-item">Email: {data.email}</li>
                                                    <li class="list-group-item">Institute: {data.institute}</li>
                                                    <li class="list-group-item">Certificate No : {data.cert_no}</li>
                                                </ul>
                                            </div>
                                        </div>

                                    ))
                                }

                                <button type='button' className='btn btn-primary' onClick={onclickHandler}>Scan Again</button>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>


    )
}

export default CertificateVerification