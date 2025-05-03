const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/User");

const jwt = require("jsonwebtoken");

const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
//des champs obligatoires.


const isAuth = require("../middleware/passport");
//check que l'utlisateur est connecté

//route pour l'inscrit 
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password, category, img, postalCode, phone, location } = req.body;

  try {
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "Email déjà utilisé." });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      lastname,
      email,
      password: hashedPassword,
      category,
      img,
      postalCode,
      phone,
      location,
    });

    const savedUser = await newUser.save();

    const payload = {
      _id: savedUser._id,
      name: savedUser.name,
    };

    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    res.status(200).send({
      newUserToken: savedUser,
      msg: "Utilisateur enregistré avec succès.",
      token: `bearer ${token}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Erreur lors de l'enregistrement." });
  }
});

// Le login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    const searchedUser = await User.findOne({ email });
    if (!searchedUser) {
      return res.status(400).send({ msg: "Invalid email" });
    }
    
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Invalid password" });
    }
   
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
      
    });

    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `bearer ${token}` });
      //l'ultilisateur a msg: "success" si login marche sinon token: JWT token presente à chaque requete , et se s'écrit au format bearer 
  } catch (error) {
    res.status(500).send({ msg: "Can not get the user" });
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});


router.delete("/:id", async (req, res) => {
  try {

      let result = await User.findByIdAndDelete(req.params.id);
      res.send({ msg: "user is deleted" })
  } catch (error) {
      console.log(error)
  }
})




router.put("/:id", async (req, res) => {
    try {

      let result = await User.findByIdAndUpdate(
          { _id: req.params.id }, { $set: { ...req.body } }
      );
      res.send({ msg: "user is updated" })
  } catch (error) {
      console.log(error)
  }
})


router.get("/", async (req, res) => {
  try {

      let result = await User.find();
      res.send({ users: result, msg: "all users" })
  } catch (error) {
      console.log(error)
  }
})





module.exports = router;
