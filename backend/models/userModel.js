const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    name: {
        type: String, 
        required: [true, 'Please add a name']
    },
    email: {
        type: String, 
        required: [true, "Please add a email"],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password']
    },

},
{
    timeStamps: true
})

module.exports = mongoose.model('user', userSchema)