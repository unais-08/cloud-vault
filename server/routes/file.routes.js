import express from "express";

import { uploadFile } from "../controllers/fileUpload.contorller.js";
import { upload } from "../middlewares/multer.js";
// import { protectRoute as verifyToken, upload } from "../middlewares/index.js";

const router = express.Router();

// Apply authentication middleware to all routes
// router.use(verifyToken);

// File routes
router.post("/upload", upload.single("file"), uploadFile);

export default router;
