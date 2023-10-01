import Certificate from "../models/certificateSchema.js";

const certificateVerify = async (req, res) => {
  try {
    const qrCode = req.params.qrCode;
    const certificateData = await Certificate.find({ std_Id: qrCode });

    const matchedCertificate = certificateData.find(
      (cert) => cert.qrurl === qrCode
    );
    if (matchedCertificate) {
      res.json({ verified: true, certificate: matchedCertificate });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export { certificateVerify };
