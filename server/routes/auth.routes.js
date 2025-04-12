import express from "express";
import {
  signup,
  login,
  logout,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/index.js";

const router = express.Router();
router.route("/check-auth").get(protectRoute, checkAuth);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);
export default router;
