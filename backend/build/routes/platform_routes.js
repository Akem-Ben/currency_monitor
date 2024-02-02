"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllSavedData_1 = require("../controllers/platformAPI/getAllSavedData");
const getSingleData_1 = require("../controllers/platformAPI/getSingleData");
const router = express_1.default.Router();
router.get("/platform_data", getAllSavedData_1.getPlatFormData);
router.get("/single", getSingleData_1.getSInglePlatFormData);
exports.default = router;
