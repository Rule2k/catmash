// Import

const cats = require('./model');

// Actions permettant de récupérer les données de la BDD. L'action get va être exportée et utilisé dans le fichier routes.js par la suite. 
// La fonction shuffleArray permet de randomiser l'ordre du tableau de données issu de la base de données.
// Par la suite, je slice le tableau avec 2 entrées de moins que la taille totale du tableau (au cas où le nombre de data évolue)
// Après avoir configuré la route, l'API me renverra donc uniquement deux entrées (au lieu du tableau entier), choisies au hasard, que le front-end utilisera plus tard pour afficher les deux images de chats.

exports.getTwoCats = (req, res) => {
  cats.get((err, data) => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const suffledArray = shuffleArray(data);
    const twoRandomEntries = suffledArray.slice(data.length - 2);
    if (err) {
      res.json({
        status: 'Erreur',
        message: err,
      });
    }
    res.json({
      status: 'Succès',
      message: 'Deux clés du tableau choisies au hasard',
      data: twoRandomEntries,
    });
  });
};

exports.getAllCats = (req, res) => {
  cats.get((err, data) => {
    const orderedEntries = data.sort((a, b) => b.score - a.score);
    if (err) {
      res.json({
        status: 'Erreur',
        message: err,
      });
    }
    res.json({
      status: 'Succès',
      message: 'Deux clés du tableau choisies au hasard',
      data: orderedEntries,
    });
  });
};
