import Certificate from "../models/certificateSchema.js";

const certificateVerify = async (req, res) => {
  try {
    const { qrCode } = req.body;
    console.log(qrCode);
    const certificateData = await Certificate.find({ std_Id: qrCode });
    // console.log(certificateData);
    const matchedCertificate = certificateData.find(
      (cert) => cert.std_Id == qrCode
    );

    if (matchedCertificate) {
      res.json(matchedCertificate);
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export { certificateVerify };
