import { Response, Request } from "express";
import Platform from "../../models/platforms";


export const getPlatFormData = async (request: Request, response: Response) => {
    try {

        let database_data = await Platform.findAll({})

        if(database_data.length){
            return response.status(200).json({
            status: 'Success',
            method: request.method,
            message: `Data found successfully`,
            database_data
        })
        }
        return response.status(400).json({
            status: 'Success',
            method: request.method,
            message: `No Data found`,
        })
        

    } catch (error: any) {
        console.log(error.message)
        response.status(400).json({
            status: 'error',
            method: request.method,
            message: 'Internal Server Error'
        })
    }
}