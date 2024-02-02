"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatFormData = void 0;
const platforms_1 = __importDefault(require("../../models/platforms"));
const getPlatFormData = async (request, response) => {
    try {
        let database_data = await platforms_1.default.findAll({});
        if (database_data.length) {
            return response.status(200).json({
                status: 'Success',
                method: request.method,
                message: `Data found successfully`,
                database_data
            });
        }
        return response.status(400).json({
            status: 'Success',
            method: request.method,
            message: `No Data found`,
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
exports.getPlatFormData = getPlatFormData;
