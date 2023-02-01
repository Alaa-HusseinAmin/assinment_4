import express from "express";
import { addproduct, deleteproduct, getallproducts, getproductusercategory, searchproduct, updateproduct } from './productcontroller.js';
const router = express.Router();
router.post("/addproduct",addproduct);
router.delete("/deleteproduct",deleteproduct);
router.put("/updateproduct",updateproduct);
router.get("/getallproducts",getallproducts);
router.get("/searchproduct",searchproduct);
router.get("/getproductusercategory",getproductusercategory);




export default router;