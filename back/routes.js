// imports

const router = require('express').Router();

// Réponse par défaut de l'API
router.get('/', (req, res) => {
  res.json({
    status: 'API Working',
    message: 'Catmash',
  });
});

// Import du controlleur contenant la méthode permettant d'extraire de la BDD 2 entrées choisies au hasard
const catsController = require('./controller');

// Routes
router.route('/gettwocats')
  .get(catsController.getTwoCats);

router.route('/getallcats')
  .get(catsController.getAllCats);

router.route('/updatescore')
  .post(catsController.updateScore);

// Export

module.exports = router;
