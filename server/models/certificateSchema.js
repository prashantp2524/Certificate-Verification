import mongoose from "mongoose";

const certificateSchema = mongoose.Schema(
  {
    std_Id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    institute: {
      type: String,
      required: true,
    },
    qrurl: {
      type: String,
      required: true,
    },
    cert_no: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
