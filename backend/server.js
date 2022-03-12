import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
// import products from './data/products.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

const app = express()


dotenv.config()
connectDB()
const PORT = process.env.PORT || 5000

app.get('/', (req,res) =>{
    res.send('API is running')
})

app.use('/api/products',productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))