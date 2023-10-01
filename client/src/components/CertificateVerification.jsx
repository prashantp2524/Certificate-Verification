import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const CertificateVerification = () =>
{
    const [qrCode, setQRCode] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);

    const handleScan = (data) =>
    {
        if (data)
        {
            setQRCode(data)
            verifyCertificate(data)
        }
    }

    const handleError = (error) =>
    {
        console.log(error)
    }

    const verifyCertificate = async (qrCode) =>
    {
        try
        {
            const response = await axios.get(`/verify/${qrCode}`)
            const result = response.data;

            if (result.verified)
            {
                setVerificationResult(result.certificate)
            } else
            {
                setVerificationResult(null);
            }
        } catch (error)
        {
            console.error('Error verifying certificate:', error);
        }
    }
    return (

        <>
            <div style={{ width: '50vw', height: '50vh', }}>
                <h1>Certificate Verification</h1>
                <QrReader
                    scanDelay={300}
                    onError={handleError}
                    onResult={handleScan}
                    style={{ width: '100%' }}
                />

                {verificationResult && (
                    <div>
                        <h2>Verification Result</h2>
                        <p>Certificate Details:</p>
                        <ul>
                            <li>Recipient Name: {verificationResult.recipientName}</li>
                            <li>Certificate Number: {verificationResult.certificateNumber}</li>
                            {/* Add more certificate attributes here */}
                        </ul>
                    </div>
                )
                }
            </div>
        </>


    )
}

export default CertificateVerification