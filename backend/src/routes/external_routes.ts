import express from "express";
import {getExternalData} from '../controllers/externalAPI/fetchEternalData'



const router = express.Router();

router.get("/save_data", getExternalData)


export default router;