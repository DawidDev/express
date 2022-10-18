const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: {type: String, required: true}, 
  description: String,
  created: { type: Date, default: Date.now },

});

module.exports = mongoose.model('News', newsSchema) // nazwa jaką się posługujemy w bazie / i schemat