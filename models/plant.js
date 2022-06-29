const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  botanicalName: {
    type: String,
    required: true
  },
  commonName: {
    type: String,
    required: true  
  },
  light: {
    type: String,
    required: true  
  },
  temperature: {
    type: String,
    required: true 
  },
  relativeHumidity: {
    type: String,
    required: true 
  },
  water: {
    type: String,
    required: true 
  },
  suggestedSoilMix: {
    type: String,
    required: true 
  },
  defaultImage: {
    type: Buffer,
  },
  defaultImageType: {
    type: String,
  },
}, {
  collection : 'basic-plant-json'
})

plantSchema.virtual('defaultImagePath').get(function() {
    if (this.defaultImage != null && this.defaultImage != null) {
      return `data:${this.defaultImageType};charset=utf-8;base64,${this.defaultImage.toString('base64')}`
    }
  })  

module.exports = mongoose.model('Plant', plantSchema, 'basic-plant-json')
