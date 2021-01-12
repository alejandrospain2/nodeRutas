const express = require('express');
const router = express.Router();

//localhost:3000/login + la ruta que pongamos en el primer parametro
router.get('/', (req,res)=>{
    res.send('ok desde la ruta login')
})

//localhost:3000/login/si
router.get('/si', (req,res)=>{
    res.send('ok desde la ruta login/si')
})

//localhost:3000/login/no/:mensaje
router.get('/no/:mensaje', (req,res)=>{
    let mensaje=req.params.mensaje;
    res.send(mensaje)
    //Escribe el mensaje de la url
})

//Se exporta para que se pueda usar router en otros archivos
module.exports = router;