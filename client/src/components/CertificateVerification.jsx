import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const CertificateVerification = () =>
{
    const [result, setResult] = useState(null)
    const [certificateData, setCertificateData] = useState()
    const [cam, setCam] = useState(true)

    // const handleSubmit = async () =>
    // {

    //     try
    //     {
    //         const qrData = {
    //             qrCode: 1006
    //         }
    //         const response = await axios.post('http://localhost:5000/api/certificate/verify', qrData);
    //         console.log('Server response:', response.data);
    //     } catch (error)
    //     {
    //         console.error('Error:', error);
    //     }
    // };


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
                const response = await axios.post('http://localhost:5000/api/certificate/verify', qrData);
                console.log('Server response:', response.data);
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
    console.log(result)
    useEffect(() =>
    {
        setCam(true);
    }, [cam]);

    return (


        <>
            <div style={{ width: '50vw', height: '50vh', }}>
                <h1>Certificate Verification</h1>



                <div>
                    {cam ? (
                        <QrReader
                            delay={300}
                            onError={handleError}
                            onResult={handleScan}
                            style={{ width: '100%' }}
                        />
                    ) : (
                        <div>
                            <p>Result: {result}</p>
                            <button onClick={() => setCam(true)}>Scan Again</button>
                        </div>
                    )}
                </div>
            </div>

            {/* <div>
                <button type='submit' onClick={handleSubmit}>submit qrcode</button>
            </div> */}



            {
                certificateData && certificateData.map((data) => (

                    <div key={data.std_Id}>
                        <h1>{data.name}</h1>
                        <h1>{data.email}</h1>
                        <h1>{data.institute}</h1>
                    </div>
                ))



            }
        </>


    )
}

export default CertificateVerification