const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')
const { createManyImageTags } = require('../utils/cloudinaryFunctions')
const User = require('../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/', async (req, res) => {
    try {
        const plants = await Plant.aggregate([
            {$sample: {size: 4}}
        ], function (err, docs) {
            return docs
        })
        const plantsImageTags = await createManyImageTags(plants)

        res.render('index', { plants: plants, plantsImageTags: plantsImageTags })
    } catch (err) {
        console.log(err)
        res.render('index', { plants: [], plantsImageTags: [] })
    }
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

/* 
To-do:
1. Error message for login 
2. Redirect to user dashboard on successful login
*/

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



module.exports = router;