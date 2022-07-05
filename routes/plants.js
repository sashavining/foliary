const express = require('express')
const router = express.Router()
const Plant = require('../models/plant.js')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')


const careNeeds = {
  light: ['Low', 'Medium', 'High', 'Sunny'],
  temperature: [],
  humidity: [],
  water: [],
  soil: [],
}

router.get('/search', async (req, res) => {
  let query = Plant.find()
  if (req.query.CommonName != null && req.query.CommonName != '') {
    query = query.regex('CommonName', new RegExp(req.query.CommonName, 'i'))
  }
  if (req.query.BotanicalName != null && req.query.BotanicalName != '') {
    query = query.regex('BotanicalName', new RegExp(req.query.BotanicalName, 'i'))
  }
  if (req.query.light != null) {
    console.log(req.query.light);
    console.log(careNeeds.light[req.query.light]);
    query = query.regex('Light', new RegExp(careNeeds.light[req.query.light], 'i'))
    console.log(query)
  }
  try {
    const plants = await query.exec()
    let plantsImageTags = await Promise.all(plants.map(async plant => {
      const imageTag = await createImageTag(plant.CloudinaryId);
      return imageTag;
    }))
    if (req.query.CommonName !== undefined && req.query.BotanicalName !== undefined) {
      res.render('plants/search', {
        plants: plants,
        plantsImageTags: plantsImageTags,
        searchOptions: req.query
      })
    } else {
      res.render('plants/search', {
        plants: [],
        plantsImageTags: [],
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
    const plantImageTag = await createImageTag(plant.CloudinaryId);
    res.render('plants/show', { plant: plant, plantImageTag: plantImageTag })
  } catch {
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
async function createImageTag (publicId) {
  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 200, height: 200, crop: 'thumb' }, 
      ],
    });
    return imageTag
};

module.exports = router