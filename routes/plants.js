const express = require('express')
const router = express.Router()
const Plant = require('../models/plant.js')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Plants Route
router.get('/', async (req, res) => {
  let query = Plant.find()
  if (req.query.commonName != null && req.query.commonName != '') {
    query = query.regex('commonName', new RegExp(req.query.commonName, 'i'))
  }
  if (req.query.botanicalName != null && req.query.botanicalName != '') {
    query = query.regex('botanicalName', new RegExp(req.query.botanicalName, 'i'))
  }
  try {
    const plants = await query.exec()
    res.render('plants/index', {
      plants: plants,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// Show Book Route
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id)
                           .exec()
    res.render('plants/show', { plant: plant })
  } catch {
    res.redirect('/')
  }
})

// I'm going to need this when I want to add photos of the plants
function saveCover(book, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    book.coverImage = new Buffer.from(cover.data, 'base64')
    book.coverImageType = cover.type
  }
}

module.exports = router