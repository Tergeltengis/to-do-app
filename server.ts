import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/routes'

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const uri: string = process.env.ATLAS_URI || ''

//CORS Policy configuration
app.use(cors())

//Use Express
app.use(express.json())

//router
app.use(userRouter)

mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
    res.send('TO DO APP BACKEND SERVICE RUNNING')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
