const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const User = require('../models/user')

function initialize (passport) {
    // const authenticateUser = async (email, password, done) => {
    //     const user = getUserByEmail(email)
    //     if (user == null) {
    //         return done(null, false, { message: 'No user with that email' })
    //     }
    //     try {
    //         if (await bcrypt.compare(password, user.password)) {
    //             return done(null, user)
    //         } else {
    //             return done(null, false, { message: 'Password incorrect' })
    //         }
    //     } catch (err) {
    //         return done(err)
    //     }
    // }

    // passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser))
    passport.use(
        new LocalStrategy((email, password, done) => {
          User.findOne({ email: email }, (err, user) => {
            if (err) { 
              return done(err);
            }
            if (!user) {
              return done(null, false, { message: "Login Failed" });
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                  // passwords match! log user in
                  return done(null, user)
                } else {
                  // passwords do not match!
                  return done(null, false, { message: "Incorrect password" })
                }
              })
            return done(null, user);
          });
        })
      );
      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}

module.exports = initialize