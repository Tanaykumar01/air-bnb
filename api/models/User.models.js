const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, unique:true , required:true},
    password: {type: String, required:true},
} , {timestamps:true});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;

// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//     name:{ type : String, required : true },
//     email: {type:String , required:[true , 'Email is required'] , unique:true},
//     password: {type:String, required:[true, 'Password is required']},
// },{timestamps:true});

// export const User = mongoose.model('User', UserSchema);