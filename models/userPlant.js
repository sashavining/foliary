const Mongoose = require("mongoose")
const Plant = require('plant')
const User = require('user')

const UserPlantSchema = new Mongoose.Schema({
  name: {
    type: String,
    // default to the common name of the plant it is
    required: false,
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
  // double check the mybrary examples to see how to get the species / owner
  species: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Plant'
  },
  owner : {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})
const UserPlant = Mongoose.model('UserPlant', UserPlantSchema, 'user-plants')
module.exports = UserPlant