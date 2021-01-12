const express = require('express');
const router = express.Router();

//localhost:3000/product/calzado
router.get('/calzado', (req,res)=>{
    res.send('ok desde la ruta product/calzado')
})

//localhost:3000/product/pantalon
router.get('/pantalon', (req,res)=>{
    res.send('ok desde la ruta product/pantalon')
})

//localhost:3000/product/reloj
router.get('/reloj', (req,res)=>{
    res.send('ok desde la ruta product/reloj')
})

//Se exporta para que se pueda usar router en otros archivos
module.exports = router;