import Certificate from "../models/certificateSchema.js";

const certificateVerify = async (req, res) => {
  try {
    const qrCode = req.params.qrCode;
    const data = await Certificate.find({ std_Id: qrCode });
    // console.log(data);
    res.json("done!!", data);
  } catch (error) {
    console.log(error);
  }
};

export { certificateVerify };
