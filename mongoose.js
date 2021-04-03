const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://vidaleve:vidaleve@vida-leve.d9con.mongodb.net/taxiapp?retryWrites=true&w=majority";

mongoose.connect(DB_URL);
