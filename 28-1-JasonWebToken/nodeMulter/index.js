const app = require('./app');
const multer = require('multer');
const express = require('express');

app.use(express.static(__dirname + '/uploads'));


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname )
  }
})


const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>{

  console.log(req.body);
  console.log(req.file);
  res.send().status(200)
});



const PORT = 3000;
app.listen(PORT, () => console.log(`Running at port: ${PORT}`));