import axios from '../httpSetup'

export const getData = async()=>{
    try {
      const response = await axios.get("platform/platform_data");
      return response;
    } catch (err: any) {
      return err.response;
    }
}

export const getSingleData = async(keyword:string)=>{
  try {
    const response = await axios.get(`platform/single?keyword=${keyword}`);
    return response;
  } catch (err: any) {
    return err.response;
  }
}