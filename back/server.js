// Imports

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const apiRoutes = require('./routes');

const app = express();

app.use(cors({ origin: 'http://95.142.173.247:8080' }));

// BodyParser pour gérer les requêtes POST

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Connection à mongoose

const mongoURI = 'mongodb://127.0.0.1:27017/catmash';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const port = process.env.PORT || 8060;

// Message de test de la homepage
app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));
app.use(express.static(path.resolve('dist')));


// Utilisation des routes de l'API
app.use('/api', apiRoutes);

// Affichage d'un message dans la console pour s'assure du bon fonctionnement du serveur
app.listen(port, () => {
  console.log(`Serveur sur le port ${port}`);
});
