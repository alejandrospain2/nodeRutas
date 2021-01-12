const express = require('express')
const app = express()
const port = 3000
//requiero/importo los archivos de la carpeta routes para poder utilizar sus rutas
//se puede poner la extension si existen mas archivos con el mismo nombre y de distinta extension
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const loginRoutes = require('./routes/login')

//vamos a crear un archivo solo que controle las rutas

//ruta principal
//utilize (ruta: localhost:3000/...)
//La ruta la busca dentro de indexRoutes (no es el metodo get)
app.use('/',indexRoutes)

//utilizo el archivo user.js
//utilize (ruta: localhost:3000/user)
app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/login', loginRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})