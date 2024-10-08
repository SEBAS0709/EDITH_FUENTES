const express = require("express")
const cors = require ("cors")
const app = express();

//configuracion
app.set("port", process.env.PORT || 4000)

//
app.use(cors())
app.use(express.json())

//rutas

app.get("/", (req, res) => {
    res.send("bienvenido mono")
})

// ruta para la API de frases
app.use("/api/frases", require("./routes/frase"))

module.exports = app;