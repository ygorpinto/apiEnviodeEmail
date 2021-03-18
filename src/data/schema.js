import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        lowercase:true
    }
})

const User = mongoose.model('User',Schema);

export default User;