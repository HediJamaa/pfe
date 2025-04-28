const mongoose = require("mongoose");
// Linge eli fetet heya bch nejibo nahna bibliothéque Mongoss
const schema = mongoose.Schema;
// Création d'un raccourci pour mongoose.Schema

const animalsSchema = new schema({
  name: String,
  img: String,
  description: String,
  race: String,
  gender: String,
  location: String,
  category: { type: String, default: "all" },
  user: String,
  Adoption: Boolean,
  inventoryStatus:String,
  idanimal:String,
  age: String,
  remarque: String,
  Couleur: String,
  Activité:String,
});

const Animals = mongoose.model("Animals", animalsSchema);
module.exports = Animals;
