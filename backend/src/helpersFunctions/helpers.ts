import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export const fetchData = async()=>{
    const movies = await axios.get(`https://api.wazirx.com/api/v2/tickers`)
    return movies.data
}