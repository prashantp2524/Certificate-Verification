import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const CertificateVerification = () =>
{
    const [result, setResult] = useState("no result")

    // const handleSubmit = async () =>
    // {
    //     const qrData = {
    //         qrCode: 101
    //     }
    //     const result = await axios.post('/verify', qrData)
    //     console.log(result.data)
    // };
    const handleScan = (data) =>
    {
        setResult(data)
        console.log(result)
    }
    const handleError = (error) =>
    {
        console.error(error);
    };
    return (


        <>
            <div style={{ width: '50vw', height: '50vh', }}>
                <h1>Certificate Verification</h1>
                {/* <button type='submit' onClick={handleSubmit}>submit qrcode</button> */}


                <QrReader
                    scanDelay={300}
                    onError={handleError}
                    onResult={handleScan}
                    constraints={{
                        facingMode: 'environment'
                    }}
                    style={{ width: '100%' }}
                />
            </div>
        </>


    )
}

export default CertificateVerification