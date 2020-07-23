const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(cors());

const reg = require('../db/index');
let AccountsModel = reg.AccountsModel;


const news = require("../db/data");
let newsModel = news.newsModel;

const massages = require('../db/massages');
let massagesModel = massages.massagesModel;

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  let regDocumentation = new AccountsModel({ username, email, password });

  regDocumentation
    .save()
    .then(() => res.status(201).send('created'))
    .catch(err => res.status(500).send(err + 'err'));
});
app.post('/data', (req, res) => {
    const {city,news} = req.body;
    let regDocumentation = new newsModel({ city,news });
  
    regDocumentation
      .save()
      .then(() => res.status(201).send('created'))
      .catch(err => res.status(500).send(err + 'err'));
  });

app.get('/login/:username/:password', (req, res) => {
  const { username, password } = req.params;

  var Username = req.body.username;
  var Password = req.body.password;

  AccountsModel.find({ username, password })
    .then(result => {
      if (result.length > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
      console.log(result);
    })
    .catch(err => {
      res.send(err);
    });
});


app.get('/data' ,function (req,res){
    newsModel.find({})
    .then((result)=>{
        res.send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

app.post('/massages',(req,res) =>{
  const { firstname, lastname, country, subject } = req.body;
  let massageDoc = new massagesModel({ firstname, lastname, country, subject });

  massageDoc
    .save()
    .then(() => res.status(201).send('sent'))
    .catch(err => res.status(500).send(err + 'err'));
});


const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
