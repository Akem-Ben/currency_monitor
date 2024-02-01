"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalData = void 0;
const helpers_1 = require("../../helpersFunctions/helpers");
const platforms_1 = __importDefault(require("../../models/platforms"));
const uuid_1 = require("uuid");
const getExternalData = async (request, response) => {
    try {
        //fetch data from external API
        const data = await (0, helpers_1.fetchData)();
        //create an empty array to store first 10 results fetched
        const data_to_save = [];
        //loop through incoming data
        for (let key in data) {
            //get only the first ten results and save in the empty array
            if (data_to_save.length < 10) {
                data_to_save.push(data[key]);
            }
        }
        //loop through the array and save the data in the local database
        for (let index = 0; index < data_to_save.length; index++) {
            await platforms_1.default.create({
                id: (0, uuid_1.v4)(),
                platform_name: data_to_save[index].name,
                platform_last_traded: data_to_save[index].last,
                platform_buy_price: data_to_save[index].buy,
                platform_sell_price: data_to_save[index].sell,
                platform_volume: data_to_save[index].volume,
                platform_base_unit: data_to_save[index].base_unit
            });
        }
        //fetch all data to check if they had all been created
        const fetchAllData = await platforms_1.default.findAll({});
        //check if all data was successfully saved
        if (fetchAllData.length !== 10) {
            return response.status(400).json({
                status: `error`,
                message: `data not successfully saved`
            });
        }
        //return final output
        return response.status(200).json({
            status: `success`,
            message: `Data successfully saved`,
            fetchAllData
        });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`,
            method: request.method
        });
    }
};
exports.getExternalData = getExternalData;
