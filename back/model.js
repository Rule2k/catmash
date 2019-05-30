// Imports

const mongoose = require('mongoose');

// Schéma mongoose, la BDD est chargée de toutes les images avec l'URL, l'ID fourni ainsi qu'une nouvelle clé score qui nous servira plus tard
// la clé "score" a été rajoutée manuellement sur toutes les entrées, via Robo 3T, avec la commande : db.your_collection.update({}, {$set : {"score": 0}}, false, true}) 


const CatsSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Export du modèle

const Cats = module.exports = mongoose.model('cats', CatsSchema);

module.exports.get = (callback, limit) => (
  Cats.find(callback).limit(limit)
);
