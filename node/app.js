import express from "express";
import cors from 'cors';
// importamos la conexion a la DB
import db from "./database/db.js";
// importamos el enrutador
import blogRouter from "./routes/routes.js";

const app = express()

// se configura cors
app.use(cors())
app.use(express.json())
// vamos a utilizar router
app.use('/blogs', blogRouter)

// se defina la conexion
try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})