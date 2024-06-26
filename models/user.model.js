const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     unique: true,
    //     default: mongoose.Types.ObjectId
    // },
    username: {
        type: String,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        required: '{PATH} is required!'
    },
    password: {
        type: String,
        required: '{PATH} is required!'
    },
    DOB: {
        type: Date,
        required: '{PATH} is required!'
    },
},{
    Timestamp: true
})

const UserModel = mongoose.models.Users || mongoose.model('User', UserSchema);

module.exports = UserModel;