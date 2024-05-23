//Utilização de API
const express = require("express");
//Formulario de Imagem
const multer = require("multer");
//Salvar a img
const sharp = require("sharp");
//Comunicação entre beckend e front
const cors = require("cors");

//Conf do multer - armazenar arquivos
const storage = multer.memoryStorage();
//Const de Upload
const upload = multer({ storage: storage });

const app = express();

app.use(cors());
//Configurar API para JSON
app.use(express.json());

app.post("/upload", upload.single('image'), async (req, res) => {
    try {
        //Salvar img no disco
        const imageNome = req.file.originalname;
        const imageData = req.file.buffer;

        //Salvando na pasta
        await sharp(imageData).toFile(`imagens/${imageNome}`);

        return res.status(200).json({ msg: "Imagem add com sucesso!" })

    } catch (error) {
        console.error("Errorrrr", error)
        return res.status(500).json({ msg: "Ocorreuu um erro interno" })
    }
})

const fs = require("fs")

app.get("/images", (req, res) => {
    fs.readdir('imagens/', (err, files)=> {
        if(err){
            return res.status(500).json({ msg: "Erro ao listar nomes das img"})
        }

        const images = files.filter((file) => file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png"))

        return res.send(images);
    })
})

const path = require('path');

app.get("/image/:imageName", (req, res) => {
    const imageNome = req.params.imageName;
    const imagePath = path.join(__dirname, "imagens", imageNome);
    res.sendFile(imagePath);

})

app.listen(3000, () => {
    console.log("That's Ok!")
});