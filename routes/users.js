const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')

// how to use this
// function checkAuthenticated (req, res, next) {
//     if (req.isAuthenticated()) { return next() }
//     res.redirect("/login")
// }

// You need to protect this route - function included above
router.get('/:id/dashboard', checkAuthenticated(), async (req, res) => {
    let plants = await Plant.find({}).exec()
    try {
        res.render('users/dashboard', { plants: plants })
    } catch (err) {
       console.log(err)
       res.redirect('users/login') 
    }
})



module.exports = router;
