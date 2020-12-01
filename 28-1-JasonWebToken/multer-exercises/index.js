const fs = require('fs').promises;
const multer = require('multer');
const express = require('express');

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    // se fosse pra tratar erro, eu passaria error no lugar de null
    console.log(file);
    callback(null, `${req.params.id} - ${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/users/:id/files', upload.single('file'), (req, res) => {
  res.status(201).json(req.file);
});


// Exercício 3 : Crie um servidor com Multer que possa receber um arquivo do tipo (.png ou .jpg); após isso, crie um script que leia uma imagem local e faça o upload para o servidor salvando essa imagem na pasta uploads.

const storageEx3 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
  
})

const uploadEx3 = multer({storageEx3})

app.post('/files/upload', uploadEx3.single('file'), (req, res) => {
  console.log(req.file);
  res.json(req.file)// estou nestta parte, conferir -----------------------------------------------------------------------------------------------------------------------------------------
})

// Exercício 1 : Crie um endpoint na API usada durante a aula que receba um texto no body da requisição e escreva esse texto em forma de arquivo.

app.post('/files/write', async (req, res) => {
  const { texto } = req.body;

  // console.log(req.body);
  await fs.writeFile(`./uploads/${Date.now()}.txt`, texto, { flag: 'wx' });

  res.status(200).send();
});

// Exercício 2 : Crie um endpoint na API usada durante a aula que receba o nome de um arquivo, leia o arquivo da pasta e devolva o texto em forma de json.

app.get('/files/read/:arquivo', async (req, res) => {
  const { arquivo } = req.params;

  const fileTxt = await fs.readFile(`./uploads/${arquivo}`, 'utf-8')

  res.status(200).json({fileTxt});
})

// tratativa para todos os erros serem pegos?

app.use((err, _req, res, _next) => {
  console.error(err);

  res.status(500).json({ message: err.message });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Body parça tá on na porta: ${PORT}`);
});
