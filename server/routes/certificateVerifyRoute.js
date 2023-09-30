import express from "express";
import { certificateVerify } from "../controller/certificateVerify.js";

const router = express.Router();

router.get("/verify/:qrCode", certificateVerify);

export default router;
