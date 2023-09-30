import express from "express";
import axios from "axios";
import fs from "fs";
import csv from "csv-parser";
import Certificate from "./models/certificateSchema.js";
import certificateVerifyRoute from "./routes/certificateVerifyRoute.js";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

app.use(express.json());
const port = process.env.PORT;
app.use("/api/certificate", certificateVerifyRoute);
app.get("/", (req, res) => {
  res.json("Hello world");
});

// const dataArray = [];

// const csvFilePath = "./certificate_verification - Sheet1.csv";
// app.get("/verify/:qrCode", async (req, res) => {
//   const qrCode = req.params.qrCode;
//   console.log("qr:", qrCode);
//   fs.createReadStream(csvFilePath)
//     .pipe(csv())
//     .on("data", (row) => {
//       // Process each row of data and convert it to an object
//       const dataObject = {
//         // Map CSV columns to object properties
//         // Example: CSV column "Name" maps to dataObject.name
//         id: row.std_Id,
//         name: row.std_name,
//         email: row.std_email,
//         institute: row.std_institute,
//         qrurl: row.qrurl,
//       };

//       dataArray.push(dataObject);
//     })
//     .on("end", () => {
//       // console.log(dataArray);
//       const matchedCertificate = dataArray.find((cert) => cert.id === qrCode);

//       if (matchedCertificate) {
//         res.json({ verified: true, certificate: matchedCertificate });
//       } else {
//         res.json({ verified: false });
//       }
//     })
//     .on("error", (error) => {
//       console.error("Error reading CSV file:", error);
//     });
// });

// fs.createReadStream(csvFilePath)
//   .pipe(csv())
//   .on("data", (row) => {
//     // Create a new Certificate document and save it to MongoDB
//     const certificate = Certificate.create({
//       std_Id: row.std_Id,
//       name: row.std_name,
//       email: row.std_email,
//       institute: row.std_institute,
//       qrurl: row.qrurl,
//     });
//   })
//   .on("end", () => {
//     console.log("CSV data has been imported into MongoDB.");
//   })
//   .on("error", (error) => {
//     console.error("Error reading CSV file:", error);
//   });

app.listen(port, () => {
  console.log("server running on port 5000");
});
