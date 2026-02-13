const fs = require('fs');
const Alumne = require('../models/alumne');

exports.llistaAlumnesMatriculats = async (req, res) => {
  // Llegeix el fitxer JSON
  const alumnesJson = JSON.parse(fs.readFileSync('./data/alumnes.json', 'utf-8'));
  
  // Transforma a objectes Alumne
  const alumnes = alumnesJson.map(alumne => 
    new Alumne(alumne.nom, alumne.cognom, alumne.anys, alumne.cicle, alumne.moduls)
  );

  let alumnesFiltrats = [];

  // Filtra per cicle IFC31-C i mòdul IAW
  for (let i = 0; i < alumnes.length; i++) {
    const alumne = alumnes[i];
    if (alumne.cicle === "IFC31-C" && alumne.moduls.indexOf("IAW") > -1) {
      alumnesFiltrats.push(alumne);
    }
  }

  // Retorna el resultat
  return res.json(alumnesFiltrats);
};

