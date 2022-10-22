const { urlencoded } = require('express');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;




const port = 3000;




app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));



app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));


app.get('', (req, res) => {
    res.render('index', { text: 'this is ejs'});
});



app.get('/login', (req, res) => {
  res.render('login.ejs');
});


app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

app.get('/login', (req, res) => {

});




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

app.use(express.static('public'));



app.post('/upload', upload.array('avatar'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length });
});

app.listen(port, () => console.info('listening'));

