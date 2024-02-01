"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalData = void 0;
const helpers_1 = require("../../helpersFunctions/helpers");
const getExternalData = async (request, response) => {
    try {
        const data = await (0, helpers_1.fetchData)();
        console.log(data);
        // return response.status(200).json({
        //     status: `success`,
        //     message: `Movie successfully fetched`,
        //     data
        // })
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
