const mongoose = require('mongoose');

 

const surveySchema = new mongoose.Schema({
  role: String,
  language: String,
  checkbox: {
    tablet: Boolean,
    cellphone: Boolean,
    desktop: Boolean,
    laptop: Boolean,
    smartwatch: Boolean,
  },
  feedback: String,
  dropdown: String,
  optional: String,
});

 

const Survey = mongoose.model('SurveyNew', surveySchema);

 

module.exports = Survey;