"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getSavedData_1 = require("../controllers/platformAPI/getSavedData");
const router = express_1.default.Router();
router.get("/platform_data", getSavedData_1.getPlatFormData);
exports.default = router;
