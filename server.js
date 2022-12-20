const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const connectDB = require('./config/db')



//load env vars
dotenv.config({path: './config/config.env'});

//connect to DB
connectDB();

//route files
const category = require('./routes/category')
const product = require('./routes/producte')

const app = express();

//body parser
app.use(express.json())

//dev logging middleware
if(process.env.NODE_ENV === 'development'){
       app.use(morgan('dev'))
}

//mount routers
app.use('/api/v1/category', category)
app.use('/api/v1/product', product)

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`
.yellow
.bold)
)

