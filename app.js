//Utilização de API
const express = require("express");
const app = express();

//Comunicação entre beckend e front
const cors = require("cors");
app.use(cors());

//Configurar API para JSON
app.use(express.json());

// Importar e usar as rotas
const imgRoutes = require("./src/routes/imgRoutes");
app.use("/api", imgRoutes);

// Servir arquivos estáticos
app.use("/assets/img", express.static("assets/img"));

app.listen(3000, () => {
  console.log("That's Ok!");
});
