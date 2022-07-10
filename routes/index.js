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
            {$sample: {size: 4}}
        ], function (err, docs) {
            return docs
        })
        plantsImageTags = await Promise.all(plants.map(async plant => {
            const imageTag = await createImageTag(plant.CloudinaryId);
            return imageTag;
        }))
    } catch {
        console.log("oops! error")
        plants = []
    }
    res.render('index', { plants: plants, plantsImageTags: plantsImageTags })
});

async function createImageTag (publicId) {
    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
        transformation: [
          { width: 300, height: 300, crop: 'thumb' },
          { radius: 50 } // check this out for more options: https://cloudinary.com/documentation/node_quickstart
        ],
      });
      return imageTag
  };

module.exports = router;