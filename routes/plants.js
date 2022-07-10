const express = require('express')
const router = express.Router()
const Plant = require('../models/plant.js')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')

router.get('/search', async (req, res) => {
  let query = Plant.find().limit(20)
  if (req.query.CommonName != null && req.query.CommonName != '') {
    query = query.regex('CommonName', new RegExp(req.query.CommonName, 'i'))
  }
  if (req.query.BotanicalName != null && req.query.BotanicalName != '') {
    query = query.regex('BotanicalName', new RegExp(req.query.BotanicalName, 'i'))
  }
  if (req.query.Light != null && req.query.Light != '') {
    query = query.regex('Light', new RegExp(req.query.Light, 'i'))
  }
  if (req.query.Temperature != null && req.query.Temperature != '') {
    query = query.regex('Temperature', new RegExp(req.query.Temperature, 'i'))
  }
  if (req.query.RelativeHumidity != null && req.query.RelativeHumidity != '') {
    query = query.regex('RelativeHumidity', new RegExp(req.query.RelativeHumidity, 'i'))
  }
  if (req.query.Water != null && req.query.Water != '') {
    query = query.regex('Water', new RegExp(req.query.Water, 'i'))
  }

  try {
    const plants = await query.exec()
    let plantsImageTags = await Promise.all(plants.map(async plant => {
      const imageTag = await createImageTag(plant.CloudinaryId, 230, 230);
      return imageTag;
    }))
    if (req.query.CommonName !== undefined || 
        req.query.BotanicalName !== undefined ||
        req.query.Light !== undefined ||
        req.query.Temperature !== undefined ||
        req.query.RelativeHumidity !== undefined ||
        req.query.Water !== undefined) {
      console.log('searching!')
      res.render('plants/search', {
        plants: plants,
        plantsImageTags: plantsImageTags,
        searchOptions: req.query
      })
    } else {
      console.log('no query parameters!')
      res.render('plants/search', {
        plants: [],
        plantsImageTags: plantsImageTags,
        searchOptions: req.query
      })
    }
  } catch {
    console.log('error!')
    res.redirect('/')
  }
})

// Show Plant Route
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id).exec()
    const plantImageTag = await createImageTag(plant.CloudinaryId, 400, 400);
    const allPlants = await Plant.find();
    const similarPlants = await findSimilar(plant, allPlants);
    const similarPlantsImageTags = await Promise.all(similarPlants.map(async plant => {
      const imageTag = await createImageTag(plant.CloudinaryId, 250, 250);
      return imageTag;
    }))
    //const similarPlantsImageTag 
    res.render('plants/show', { plant: plant, plantImageTag: plantImageTag, similarPlants: similarPlants, similarPlantsImageTags: similarPlantsImageTags})
  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
})

router.post('/', upload.single('image'), async(req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
/* CREATES A NEW PLANT:

    let plant = new Plant({
      name: req.body.name,
      image: result.secure_url,
      cloudinary_id: result.public_id
    })

    await plant.save()

*/
    res.json(result);
  } catch (err) {
    console.log(err);
  }
})
// input type=file name=image on the front end to end it here

router.get('/', async (req, res) => {
  try{
    let plant = await Plant.find();
    res.json(plant);
  } catch (err) {
    console.log(err)
  }
})

// how to get files to go into that sub-folder I have on Cloudinary? Not a problem now but might be later.

/* DELETE ROUTE

router.get('/:id', async (req, res) => {
  try {
    let user = await Plant.findById(req.params.id);
    await cloudinary.uploader.destroy(user.cloudinary_id)
    await user.remove()
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})*/
/* update path
router.put('/:id', upload.single("image"), async(req, res) => {
  try {
    let plant = await Plant.findById(req.params.id);
    await cloudinary.uploader.destroy(user.cloudinary_id);
    const result = await cloudinary.uploader.upload(req.file.path);
    const data = {
      // some data in here - examples - name: req.body.name || user.name / avatar: result.secure.url || user.avatar
    }
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
  } catch (err) {
    console.log(err)
  }
})
*/
async function createImageTag (publicId, width, height) {
  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: width, height: height, crop: 'thumb' }, 
        { radius: 50 },
      ],
    });
    return imageTag
};

function findSimilar (plant, plantsArray) {
  return plantsArray.filter(function (plantToBeCompared) {
    if (plant.BotanicalName === plantToBeCompared.BotanicalName) return false
    if (this.count >= 8) return false;
    if (plant.BotanicalName.split(" ") === plantToBeCompared.BotanicalName.split(" ")) {
      console.log(this.count)
      this.count++
      return plantToBeCompared
    } else if (atLeastFourPropertiesSame(plant, plantToBeCompared)) {
      console.log(this.count)
      this.count++
      return plantToBeCompared
    }
  }, {count: 0})
}

function atLeastFourPropertiesSame (item1, item2) {
  let similarity = 0
  if (item1.Light === item2.Light) similarity++
  if (item1.Temperature === item2.Temperature) similarity++
  if (item1.RelativeHumidity === item2.RelativeHumidity) similarity++
  if (item1.Water === item2.Water) similarity++
  if (item1.SuggestedSoilMix === item2.SuggestedSoilMix) similarity++

  if (similarity >= 4) return true;
  else return false;
}

module.exports = router