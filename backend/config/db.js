import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI
            // The nEw version of moongoos allows you to do this without adding the following, it already takes them as true, so there is no need for you set them up again
        //     ,{
        //     useUnifiedTopology: true,
        //     useNewUrlParser : true,
        //     useCreateIndex : true,
        // }
        )

        console.log(`Mongoose Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB