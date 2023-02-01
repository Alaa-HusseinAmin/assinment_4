import express from "express";
import { addcategory, deletecategory, getallcategory, updatecategory } from './categorycontroller.js';
const router = express.Router();
router.post("/addcategory",addcategory);
router.delete("/deletecategory",deletecategory);
router.get("/getallcategory",getallcategory);
router.put("/updatecategory",updatecategory);




export default router;