import axios from '../httpSetup'

export const getData = async()=>{
    try {
      const response = await axios.get("platform/platform_data");
      return response;
    } catch (err: any) {
      return err.response;
    }
}