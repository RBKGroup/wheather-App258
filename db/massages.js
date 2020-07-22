const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/weather", { useNewUrlParser: true })
    .then(() => {
        console.log(" The connecting is good :) ");
    })
    .catch((err) => {
        console.log(" Err when conecting To DataBase :( ", err);
    });
    let massageSchema = mongoose.Schema({
        firstname: { type: String},
        lastname: { type: String},
        country: { type: String},
        subject: {type: String}
      });

      let massagesModel = mongoose.model("massages", massageSchema);
      module.exports.massagesModel = massagesModel;