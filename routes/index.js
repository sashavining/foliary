const { ImageTag } = require('cloudinary-core');
const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')
const cloudinary = require('../utils/cloudinary')


router.get('/', async (req, res) => {
    let plants;
    let plantsImageTags;
    try {
        plants = await Plant.aggregate([
            {$sample: {size: 10}}
        ], function (err, docs) {
            console.log(docs)
            return docs
        })
        plantsImageTags = plants.map(async plant => {
            console.log(plant.CloudinaryId)
            const imageTag = await createImageTag(plant.CloudinaryId);
            return Promise.resolve(imageTag);
        })
    } catch {
        console.log("oops! error")
        plants = []
    }
    res.render('index', { plants: plants, plantsImageTags: plantsImageTags })
});

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
async function createImageTag (publicId) {
    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
        transformation: [
          { width: 250, height: 250, crop: 'thumb' },
        ],
      });
      return Promise.resolve(imageTag);
  };

module.exports = router;