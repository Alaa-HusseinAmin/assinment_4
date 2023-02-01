import express from "express";
import { signin, signup } from './usercontroller.js';
const router = express.Router();
router.post("/adduser",signup);
router.post("/adduser/signin",signin);
export default router;