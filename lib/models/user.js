import { Schema, model } from 'mongoose';

const UserSchema = Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});


module.exports = model('User', UserSchema);