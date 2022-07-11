const Mongoose = require("mongoose")
const Plant = require('plant')
const User = require('user')

const UserPlantSchema = new Mongoose.Schema({
  // see how to get the species / owner 
  species: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Plant'
  },
  name: {
    type: String,
    // default to the common name of the plant it is
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  wateringInterval: {
    type: String,
    required: true,
  },
  lastWatered: {
    type: Date,
    required: false,
  },
  lastFertilized: {
    type: Date,
    required: false,
  },
  lastRepotted: {
    type: Date,
    required: false,
  },
  images: {
    type: Array,
    required: false,
  },
  notes: {
    type: Array,
    required: false,
  },
  owner : {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})
const UserPlant = Mongoose.model('UserPlant', UserPlantSchema, 'user-plants')
module.exports = UserPlant