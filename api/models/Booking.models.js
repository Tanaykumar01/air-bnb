const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  place: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Place'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'User'},
  checkIn: {type:Date, required:true, default:Date.now},
  checkOut: {type:Date, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  price: Number,
} , {timestamps:true});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;