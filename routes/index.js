const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')
const cloudinary = require('../utils/cloudinary')
const User = require('../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

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


router.get("/register", (req, res) => {
    if (!req.user) {
        res.render("users/register")
    } else {
        res.redirect(`users/${req.user._id}/dashboard`)
    }
});
router.get("/login", (req, res) => {
    if (!req.user) {
        res.render("users/login")
    } else {
        res.redirect(`users/${req.user._id}/dashboard`)
    }
});

router.get("/admin", (req, res) => res.render("users/admin"));

router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            console.log(err)
        } else {
            const user = new User({
                username: req.body.username,
                password: hashedPassword
                }).save(err => {
                    if (err) { 
                      return next(err);
                    }
                    res.redirect("/");
                  });
        }
    }) 
});

// Add some error message if you fail to login

router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
);

router.get("/logout", (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

async function createImageTag (publicId) {
    // Create an image tag with transformations routerlied to the src URL
    let imageTag = cloudinary.image(publicId, {
        transformation: [
          { width: 300, height: 300, crop: 'thumb' },
          { radius: 50 } // check this out for more options: https://cloudinary.com/documentation/node_quickstart
        ],
      });
      return imageTag
  };

module.exports = router;