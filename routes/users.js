<<<<<<< HEAD
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const User = require('../models/user')
const initializePassport = require('../utils/passport')
initializePassport(
     passport
)

 app.use(passport.initialize())
 app.use(passport.session())
 // ensures that I don't need to manually pass the current user to every single controller

 // checkNotAuthenticated not the problem
router.get('/login', checkNotAuthenticated, async (req, res) => {
    try {
        res.render('users/login')
    } catch (err) {
        console.log(err)
    }
})

router.get('/register', checkNotAuthenticated, async (req, res) => {
    try {
        res.render('users/register')
    } catch (err) {
        console.log(err)
    }
})

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: 'login',
    failureFlash: true
}))

router.post('/register', async (req, res, next) => {
   // hash the PW and store it in the DB (so it's not plaintext, lol)
   try {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }).save(err => {
                if (err) {
                    return next(err)
                }
                res.redirect("/")
            })        
       
    })
    } catch (err) {
        console.log(err)
    };
})

router.delete('/logout', function (req, res, next) {
    req.logOut(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/login');
    });
  });

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/users/login')
}


function checkNotAuthenticated(req, res, next) {
    if(!req.isAuthenticated()) {
        res.redirect('/')
    } 
    return next()
}

/*
format for protecting pages behind a login screen:

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})
*/


module.exports = router
=======
const express = require('express')
const router = express.Router()
// const { validateCookie } = require('../auth/auth')

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
>>>>>>> de4533b9c18962a917a3e87afed713905638c0e7
