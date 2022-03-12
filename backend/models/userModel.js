import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    userEmail :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    // Automatically creates the created at table for us
    timestamps: true
})

const User = mongoose.model('User',userSchema)

export default User