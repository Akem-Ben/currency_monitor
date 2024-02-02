import express from "express";
import { getPlatFormData } from "../controllers/platformAPI/getAllSavedData";
import { getSInglePlatFormData } from "../controllers/platformAPI/getSingleData";



const router = express.Router();



router.get("/platform_data", getPlatFormData )
router.get("/single", getSInglePlatFormData)


export default router;