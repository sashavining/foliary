const express = require('express')
const router = express.Router()
const Plant = require('../models/plant.js')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')

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

// Show Plant Route
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id).exec()
    console.log(plant) // why undefined?
    console.log(plant.CloudinaryId) // why undefined?
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
        { width: 350, crop: 'thumb' },
      ],
    });
    return imageTag
};

module.exports = router