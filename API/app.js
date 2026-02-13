var express = require('express');
var app = express();

const alumneRoutes = require('./src/routes/alumne-routes');

app.use(express.json());

// Vincula les rutes dels alumnes
app.use('/api/alumnes', alumneRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));