const express = require("express");
const { Coche } = require("./sequelize");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/coches", (req, res) => {
    Coche.findAll().then(coches =>{
        res.send(coches);
    })
})

app.post("/coches", (req, res) => {
    //console.log(req.body);
    Coche.create({
        modelo: req.body.modelo,
        marca: req.body.marca,
        color: req.body.color,
        matricula: req.body.matricula,
        dueno: req.body.dueno
    }).then(coche => {
        res.send("Coche creado correctamente");
    })
    
})

app.get("/coches/:id", (req, res) => {
    let carid = req.params.id;
    Coche.findOne({
        where:{id:carid}
    }).then(coche =>{
        res.send(coche)
    })
})

app.put("/coches/:id", (req, res) => {
    let carid = req.params.id;
    let datosActualizados = req.body;
    Coche.findOne({
        where:{id:carid}
    }).then(coche =>{
        coche.update(datosActualizados).then( cocheActualizado => {
            res.send(cocheActualizado);
        })
    })
})

app.delete("/coches/:id", (req, res) => {
    let carid = req.params.id;
    Coche.destroy({
        where:{id:carid}
    }).then( () =>{
       res.send("Coche con ID: " + carid + " eliminado cocrrectamente");
    })
})

app.listen(port ,() => console.log(`Escuchando en el puerto ${port}`));