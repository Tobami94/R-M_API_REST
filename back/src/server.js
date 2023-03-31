const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const router = require("./routes")


const PORT = 3001;

const server = express();


//middlewares
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());



//routes
server.use("/", router);


server.listen(PORT, () => {
   console.log(`Server escuchando en puerto ${PORT}`);
});



//configuración de nuestro server