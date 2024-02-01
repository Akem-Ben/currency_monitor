import express from "express";
import { getPlatFormData } from "../controllers/platformAPI/getSavedData";



const router = express.Router();



router.get("/platform_data", getPlatFormData )


export default router;