// Importation

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();

// BodyParser pour gérer les requêtes POST

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

// Connection à mongoose

mongoose.connect('mongodb://localhost/catmash');
const port = process.env.PORT || 8080;

// Message de test de la homepage
app.get('/', (req, res) => res.send('Hello Catmash'));

// Utilisation des routes de l'API
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Serveur sur le port ${port}`);
});
