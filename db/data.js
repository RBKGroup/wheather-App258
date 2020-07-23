const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/weather', { useNewUrlParser: true })
  .then(() => {
    console.log(' The connecting is good :) ');
  })
  .catch((err) => {
    console.log(' Err when conecting To DataBase :( ', err);
  });
let newsSchema = mongoose.Schema({
  city: { type: String },
  news: { type: String },
});

let newsModel = mongoose.model('News', newsSchema);
module.exports.newsModel = newsModel;
