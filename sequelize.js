const Sequelize = require("sequelize");
const CarModel = require("./Entities/Car");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conexión correcta a la base de datos');
  });


  const sequelize = new Sequelize(db, null, null, {
    host: 'localhost',
    dialect: 'sqlite'
  });

  const Coche = CarModel(sequelize, Sequelize);

  sequelize.sync().then(() => {
      console.log("Se han creado las tablas correctamente");
  })

  module.exports = {
      Coche
  }
