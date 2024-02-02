"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSInglePlatFormData = void 0;
const platforms_1 = __importDefault(require("../../models/platforms"));
const getSInglePlatFormData = async (request, response) => {
    try {
        let keyword = request.query.keyword;
        let data = await platforms_1.default.findOne({ where: { platform_base_unit: keyword } });
        if (data) {
            return response.status(200).json({
                status: 'Success',
                method: request.method,
                message: `Data found successfully`,
                data
            });
        }
        return response.status(400).json({
            status: 'error',
            method: request.method,
            message: `Data not found`,
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(400).json({
            status: 'error',
            method: request.method,
            message: 'Internal Server Error'
        });
    }
};
exports.getSInglePlatFormData = getSInglePlatFormData;
