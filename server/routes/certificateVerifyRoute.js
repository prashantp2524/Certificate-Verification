import express from "express";
import { certificateVerify } from "../controller/certificateVerify.js";

const router = express.Router();

router.post("/verify", certificateVerify);

export default router;
