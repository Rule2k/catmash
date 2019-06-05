// Imports

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const apiRoutes = require('./routes');

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));

// BodyParser pour gérer les requêtes POST

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Connection à mongoose

const mongoURI = 'mongodb://95.142.173.247/catmash';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const port = process.env.PORT || 8060;

// Liaison des fichiers & routes
app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));
// app.get('/app.css', (req, res) => res.sendFile(path.resolve('dist/app.css')));
// app.get('/vendors.js', (req, res) => res.sendFile(path.resolve('dist/vendors.js')));
// app.get('/app.js', (req, res) => res.sendFile(path.resolve('dist/app.js')));
app.use(express.static(path.join(__dirname, '/../dist')));

// Utilisation des routes de l'API
app.use('/api', apiRoutes);

// Affichage d'un message dans la console pour s'assure du bon fonctionnement du serveur
app.listen(port, () => {
  console.log(`Serveur sur le port ${port}`);
});
