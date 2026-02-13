class Alumne {
  constructor (nom, cognom, anys, cicle, moduls) {
    this.nom = nom;
    this.cognom = cognom;
    this.anys = anys;
    this.cicle = cicle;
    this.moduls = moduls;
  }
}

module.exports = Alumne; // Molt important exportar-lo correctament [cite: 263]  
