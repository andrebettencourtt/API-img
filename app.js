//Utilização de API
const express = require("express");
const app = express();

//Comunicação entre beckend e front
const cors = require("cors");
app.use(cors());

//Configurar API para JSON
app.use(express.json());

const imgRoutes = require("./src/routes/imgRoutes");

app.use(imgRoutes);

app.listen(3000, () => {
  console.log("That's Ok!");
});
