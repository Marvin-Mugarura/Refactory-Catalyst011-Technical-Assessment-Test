const mongoose = require("mongoose");
const covidSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  givenname: {
    type: String,
  },
  date: {
    type: Date,
  },
  place: {
    type: String,
  },
  occupation: {
    type: String,
  },
  nin: {
    type: String,
    trim: true,
  },
  loanamount: {
    type: String,
    trim: true,
  },
  loansecurity: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
  },
  fallback: {
    type: String,
    trim: true,
  },
});

// Export Model
module.exports = mongoose.model("Covid", covidSchema);