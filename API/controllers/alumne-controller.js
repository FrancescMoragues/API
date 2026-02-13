const fs = require('fs');
const Alumne = require('../models/alumne');

exports.llistaAlumnesMatriculats = async (req, res) => {
  // Llegeix el fitxer JSON des de la teva estructura actual 
  const alumnesJson = JSON.parse(fs.readFileSync('./data/alumnes.json', 'utf-8'));
  
  const alumnes = alumnesJson.map(alumne => 
    new Alumne(alumne.nom, alumne.cognom, alumne.anys, alumne.cicle, alumne.moduls)
  );

  let alumnesFiltrats = [];

  for (let i = 0; i < alumnes.length; i++) {
    const alumne = alumnes[i];
    // Filtre segons l'enunciat: IFC31-C i mòdul IAW [cite: 205, 305]
    if (alumne.cicle === "IFC31-C" && alumne.moduls.indexOf("IAW") > -1) {
      alumnesFiltrats.push(alumne);
    }
  }

  return res.json(alumnesFiltrats); // Retorna el resultat [cite: 318]
};
