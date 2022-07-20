const Mongoose = require("mongoose")
const Plant = require('./plant')
const User = require('./user')

const UserPlantSchema = new Mongoose.Schema({
  species: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Plant'
  },
  name: {
    type: String,
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
    required: true,
    default: []
  },
  owner : {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  }
})

const UserPlant = Mongoose.model('UserPlant', UserPlantSchema, 'user-plants')
module.exports = UserPlant