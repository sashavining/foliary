const express = require('express')
const router = express.Router()

router.get('/:id/dashboard', (req, res) => {
    try {
        res.render('users/dashboard')
    } catch (err) {
       console.log(err)
       res.redirect('users/login') 
    }
})


// Not just one dashboard for everyone; create a user ID (separate from the mongoDB id) and append that when users attempt to access /dashboard


module.exports = router;
