//Aquí usamos get y no 'use' porque no vamos a unir sino que está en el contenido de la ruta.
//Se ejecutara el router y se exportará para que funcione en otros archivos

const express = require('express');
const router = express.Router();

//localhost:3000/user + la ruta que pongamos en el primer parametro
router.get('/', (req,res)=>{
    res.send('ok desde la ruta user')
})

//localhost:3000/user/altura
router.get('/altura', (req,res)=>{
    res.send('ok desde la ruta user/altura')
})

//localhost:3000/user/edad
router.get('/edad', (req,res)=>{
    res.send('ok desde la ruta user/edad')
})

//Se exporta para que se pueda usar router en otros archivos
module.exports = router;