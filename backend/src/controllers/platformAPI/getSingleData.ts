import { Response, Request } from "express";
import Platform from "../../models/platforms";


export const getSInglePlatFormData = async (request: Request, response: Response) => {
    try {

        let keyword = request.query.keyword as string
        let data = await Platform.findOne({where: {platform_base_unit:keyword}})
        if(data){
            return response.status(200).json({
            status: 'Success',
            method: request.method,
            message: `Data found successfully`,
            data
        })
        }
        return response.status(400).json({
            status: 'error',
            method: request.method,
            message: `Data not found`,
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