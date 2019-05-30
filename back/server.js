// Importation

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.listen(port, () => {
  console.log(`Serveur sur le port ${port}`);
});
