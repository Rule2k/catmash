// Imports

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const apiRoutes = require('./routes');

const app = express();

app.use(cors({ origin: 'http://95.142.173.247:8060' }));

// BodyParser pour gérer les requêtes POST

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Connection à mongoose

const mongoURI = 'mongodb://95.142.173.247:27017/catmash';

// mongoose.connect('mongodb://localhost:27017/catmash', { useNewUrlParser: true });

const MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});


const port = process.env.PORT || 8060;

// Message de test de la homepage
app.get('/', (req, res) => res.sendFile(path.resolve('dist/index.html')));
app.get('/app.css', (req, res) => res.sendFile(path.resolve('dist/app.css')));
app.get('/vendors.js', (req, res) => res.sendFile(path.resolve('dist/vendors.js')));
app.get('/app.js', (req, res) => res.sendFile(path.resolve('dist/app.js')));

// Utilisation des routes de l'API
app.use('/api', apiRoutes);

// Affichage d'un message dans la console pour s'assure du bon fonctionnement du serveur
app.listen(port, () => {
  console.log(`Serveur sur le port ${port}`);
});
