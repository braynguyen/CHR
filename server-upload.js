const express = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const{ originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  }
});
const upload = multer({ storage });
const app = express();

app.use(express.static('public'));



app.post('/upload', upload.array('avatar'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length });
});

app.listen(3001);
