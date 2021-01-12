const express = require('express');

//una funcion/metodo de la libreria express que crea las rutas y utilizar las rutas en el archivo principal
const router = express.Router();

//creamos la ruta que queramos
//localhost:3000/
router.get('/',(req,res) =>{
    res.send('ok desde el archivo la ruta index')
})

//localhost:3000/fabrica
router.get('/fabrica',(req,res) =>{
    res.send('ok desde el archivo ruta index/fabrica')
})

//localhost:3000/empleados
router.get('/empleados',(req,res) =>{
    res.send('ok desde el archivo ruta index/empleados')
})

//exporto el modulo completo
module.exports = router;