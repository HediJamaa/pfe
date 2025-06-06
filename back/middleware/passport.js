const User = require("../models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt; 
const passport = require("passport");
//appel pour la bibliothque de l'authentification 

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 

  secretOrKey: process.env.SecretOrKey,
  //C’est le mot clé secret (crypté) pour la vérification w décryptage de token.
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id }).select("-password")
      console.log(user)
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);
module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
// middleware s'appel isAuth()