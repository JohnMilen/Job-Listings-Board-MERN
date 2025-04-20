import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/connectDB.js'
import jobRoute from './routes/jobRoute.js'
import cors from 'cors'

dotenv.config()

const __dirname = path.resolve()

const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/job',jobRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/frontend/dist')))
}

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})