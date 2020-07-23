//db connection & schema
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/weather", { useNewUrlParser: true })
    .then(() => {
        console.log(" The connecting is good :) ");
    })
    .catch((err) => {
        console.log(" Err when conecting To DataBase :( ", err);
    });
    let accountsSchema = mongoose.Schema({
        username: { type: String, unique: true, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
      });
      let AccountsModel = mongoose.model("Accounts", accountsSchema);
      
      module.exports.AccountsModel = AccountsModel;