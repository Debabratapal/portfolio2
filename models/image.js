const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  path: String,
  createdAt: Number,
  category: {type:  Schema.ObjectId, ref: 'ImageCategory'}
});

module.exports = mongoose.model('Image', imageSchema);