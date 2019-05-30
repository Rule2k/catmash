// Imports

const mongoose = require('mongoose');

// Schéma mongoose, la BDD est chargée de toutes les images avec l'URL, l'ID fourni ainsi qu'une nouvelle clé score qui nous servira plus tard

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
