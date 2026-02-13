var express = require('express');
var app = express();

// Importamos las rutas corregidas
const alumneRoutes = require('./routes/alumne-routes');

app.use(express.json());

// Vinculamos las rutas
app.use('/api/alumnes', alumneRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
