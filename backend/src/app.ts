import express from "express"
import dotenv from "dotenv"
import {HttpError} from 'http-errors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser'
import {database} from './database'
import api_routes from './routes/external_routes'
import localhost_routes from './routes/platform_routes'

const app = express()

dotenv.config()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(bodyParser.json())

app.use("/external", api_routes)
app.use("/platform", localhost_routes)


database.sync({}).then( ()=>{
    console.log("Database is connected");
}).catch((err:HttpError)=>{
    console.log(err);
})

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`)
})

export default app;