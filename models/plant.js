const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  BotanicalName: {
    type: String,
    required: true
  },
  CommonName: {
    type: String,
    required: true  
  },
  Light: {
    type: String,
    required: true  
  },
  Temperature: {
    type: String,
    required: true 
  },
  RelativeHumidity: {
    type: String,
    required: true 
  },
  Water: {
    type: String,
    required: true 
  },
  SuggestedSoilMix: {
    type: String,
    required: true 
  },
  Cloudinary_id: {
    type: String,
  },
})

const Plant = mongoose.model('Plant', plantSchema, 'basic-plant-json');

module.exports = Plant
