import Certificate from "../models/certificateSchema.js";

const certificateVerify = async (req, res) => {
  try {
    const { qrCode } = req.body;
    // console.log(qrCode);
    const certificateData = await Certificate.find({ cert_no: qrCode });
    // console.log(certificateData);

    if (certificateData) {
      res.json(certificateData);
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export { certificateVerify };
