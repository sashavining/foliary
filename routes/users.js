const express = require('express')
const router = express.Router()
const Plant = require('../models/plant')
const { checkAuthenticated } = require('../utils/passport')

router.get('/:id/dashboard', checkAuthenticated, async (req, res) => {
    let plants = await Plant.find({}).exec()
    try {
        res.render('users/dashboard', { plants: plants })
    } catch (err) {
       console.log(err)
       res.redirect('users/login') 
    }
})


module.exports = router;
